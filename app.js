(() => {
  'use strict';

  // Ad Pixel IDs: paste Meta Pixel ID or TikTok Pixel ID here when launching campaigns
  const TRACKING = {
    metaPixelId: '',
    tiktokPixelId: ''
  };

  const STANDARD_EVENT_MAP = {
    ViewContent: 'ViewContent',
    PayJump: 'InitiateCheckout',
    SendReceiptWhatsApp: 'Contact',
    SendReceiptInstagram: 'Contact',
    TalkFirstWhatsApp: 'Contact',
    TalkFirstInstagram: 'Contact'
  };

  function initPixels() {
    const metaId = TRACKING.metaPixelId.trim();
    if (metaId && typeof window.fbq !== 'function') {
      /* eslint-disable */
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq('init', metaId);
      window.fbq('track', 'PageView');
    }

    const ttId = TRACKING.tiktokPixelId.trim();
    if (ttId && !window.ttq) {
      /* eslint-disable */
      !(function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        const ttq = (w[t] = w[t] || []);
        ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'hold', 'revoke', 'consent'];
        ttq.setAndDefer = function (obj, method) {
          obj[method] = function () {
            obj.push([method].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };
        for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function (id) {
          const e = ttq._i[id] || [];
          for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
          return e;
        };
        ttq.load = function (id, config) {
          const r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
          ttq._i = ttq._i || {};
          ttq._i[id] = [];
          ttq._i[id]._u = r;
          ttq._t = ttq._t || {};
          ttq._t[id] = +new Date();
          ttq._o = ttq._o || {};
          ttq._o[id] = config || {};
          const s = d.createElement('script');
          s.async = true;
          s.src = r + '?sdkid=' + encodeURIComponent(id) + '&lib=' + t;
          const first = d.getElementsByTagName('script')[0];
          first.parentNode.insertBefore(s, first);
        };
      })(window, document, 'ttq');
      /* eslint-enable */
      window.ttq.load(ttId);
      window.ttq.page();
    }
  }

  function trackEvent(name, params = {}) {
    const stdName = STANDARD_EVENT_MAP[name];
    if (TRACKING.metaPixelId.trim() && typeof window.fbq === 'function') {
      if (stdName) window.fbq('track', stdName, params);
      else window.fbq('trackCustom', name, params);
    }
    if (TRACKING.tiktokPixelId.trim() && typeof window.ttq === 'object' && typeof window.ttq.track === 'function') {
      window.ttq.track(stdName || name, params);
    }
  }

  const PAYMENT_METHODS = {
    baridimob: {
      label: 'RIP BaridiMob',
      account: '00799999004277833193',
      now: '4,900 دج',
      copiedHint: 'تم نسخ RIP — افتح تطبيق BaridiMob، حوّل 4,900 دج، وابعثلي سكرين شوت الوصل تحت.',
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ BaridiMob (4,900 دج) وهاهو وصل الدفع:'
    },
    redotpay: {
      label: 'RedotPay ID',
      account: '1743900815',
      now: '$18',
      copiedHint: 'تم نسخ RedotPay ID — افتح RedotPay، حوّل \u2066$18\u2069، وابعثلي سكرين شوت الوصل تحت.',
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ RedotPay ($18) وهاهو وصل الدفع:'
    }
  };

  const WA_BASE = 'https://wa.me/213553218024?text=';
  const VSL_DURATION = 175.24;

  function formatTime(secs) {
    if (!Number.isFinite(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function setNodeHidden(el, hide) {
    if (!el) return;
    el.toggleAttribute('hidden', Boolean(hide));
  }

  // 1. Custom VSL Player (Clean Poster Start -> Frame Visible on Pause)
  function initVideoPlayer() {
    const video = document.getElementById('vsl-video');
    const overlay = document.getElementById('vsl-overlay');
    const loader = document.getElementById('vsl-loader');
    const errorBox = document.getElementById('vsl-error');
    const playBtn = document.getElementById('vsl-play-btn');
    const speedBtn = document.getElementById('vsl-speed-btn');
    const muteBtn = document.getElementById('vsl-mute-btn');
    const fsBtn = document.getElementById('vsl-fs-btn');
    const scrub = document.getElementById('vsl-scrub');
    const scrubFill = document.getElementById('vsl-scrub-fill');
    const scrubTip = document.getElementById('vsl-scrub-tip');
    const flashEl = document.getElementById('vsl-flash');
    const timeEl = document.getElementById('vsl-time');
    const frame = document.getElementById('vsl-frame');
    if (!video || !overlay || !playBtn) return;

    const speeds = [1, 1.25, 1.5];
    let speedIdx = 0;
    let trackedStart = false;
    let hasStarted = false;
    let userInitiated = false;
    let mediaFailed = false;
    let dragging = false;
    let flashTimer = null;
    const reducedMotionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

    function triggerFlash(willPlay) {
      if (!flashEl || !hasStarted) return;
      if (reducedMotionQuery && reducedMotionQuery.matches) return;
      const playIcon = flashEl.querySelector('[data-flash-icon="play"]');
      const pauseIcon = flashEl.querySelector('[data-flash-icon="pause"]');
      setNodeHidden(playIcon, !willPlay);
      setNodeHidden(pauseIcon, willPlay);
      if (flashTimer) clearTimeout(flashTimer);
      flashEl.classList.remove('is-flashing');
      void flashEl.offsetWidth;
      flashEl.classList.add('is-flashing');
      flashTimer = setTimeout(() => {
        flashEl.classList.remove('is-flashing');
        flashTimer = null;
      }, 340);
    }

    function updateScrubTip(clientX) {
      if (!scrub || !scrubTip) return;
      const rect = scrub.getBoundingClientRect();
      if (!rect.width) return;
      const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : VSL_DURATION;
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const clampedX = Math.min(94, Math.max(6, ratio * 100));
      scrub.style.setProperty('--tip-x', clampedX.toFixed(2) + '%');
      scrubTip.textContent = formatTime(ratio * dur);
      scrub.classList.add('is-tip-visible');
    }

    function setLoading(loading) {
      if (loader) loader.hidden = !loading;
    }

    function setError(hasError) {
      if (errorBox) errorBox.hidden = !hasError;
    }

    function syncPlayUi(isPlaying) {
      const playIcon = playBtn.querySelector('[data-icon="play"]');
      const pauseIcon = playBtn.querySelector('[data-icon="pause"]');
      setNodeHidden(playIcon, isPlaying);
      setNodeHidden(pauseIcon, !isPlaying);
      playBtn.setAttribute('aria-label', isPlaying ? 'حبّس الفيديو' : 'شغّل الفيديو');
      if (isPlaying && document.activeElement === overlay) {
        playBtn.focus();
      }
      const hideOverlay = isPlaying || hasStarted;
      overlay.classList.toggle('is-hidden', hideOverlay);
      overlay.setAttribute('aria-hidden', String(hideOverlay));
      overlay.inert = hideOverlay;
    }

    function syncScrubUi(cur, dur) {
      const safeDur = Number.isFinite(dur) && dur > 0 ? dur : VSL_DURATION;
      const clamped = Math.min(safeDur, Math.max(0, cur));
      const pct = Math.min(100, Math.max(0, (clamped / safeDur) * 100));
      if (scrubFill) scrubFill.style.width = pct.toFixed(2) + '%';
      if (timeEl) timeEl.textContent = formatTime(clamped) + ' / ' + formatTime(safeDur);
      if (scrub) {
        scrub.setAttribute('aria-valuenow', String(Math.round(pct)));
        scrub.setAttribute('aria-valuetext', formatTime(clamped) + ' / ' + formatTime(safeDur));
      }
    }

    function seekToTime(targetTime) {
      const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : VSL_DURATION;
      const clamped = Math.min(dur, Math.max(0, targetTime));
      try {
        video.currentTime = clamped;
      } catch (_) {}
      syncScrubUi(clamped, dur);
    }

    function seekToClientX(clientX) {
      if (!scrub) return;
      const rect = scrub.getBoundingClientRect();
      const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : VSL_DURATION;
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      seekToTime(ratio * dur);
    }

    function startPlayback() {
      userInitiated = true;
      setError(false);
      if (mediaFailed || video.error || video.networkState === 3) {
        mediaFailed = false;
        video.load();
      }
      if (video.readyState < 3) setLoading(true);
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch((err) => {
          setLoading(false);
          if (
            mediaFailed ||
            video.error ||
            video.networkState === 3 ||
            (err && err.name !== 'AbortError' && err.name !== 'NotAllowedError')
          ) {
            setError(true);
          }
        });
      }
      if (!trackedStart) {
        trackedStart = true;
        trackEvent('VSLPlay');
      }
    }

    function togglePlay() {
      if (video.paused || video.ended) startPlayback();
      else video.pause();
    }

    function togglePlayWithFlash() {
      const willPlay = video.paused || video.ended;
      togglePlay();
      triggerFlash(willPlay);
    }

    overlay.addEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlayWithFlash);

    video.addEventListener('play', () => {
      hasStarted = true;
      syncPlayUi(true);
      setError(false);
    });
    video.addEventListener('loadedmetadata', () => {
      mediaFailed = false;
      setError(false);
      setLoading(false);
    });
    video.addEventListener('playing', () => {
      mediaFailed = false;
      setError(false);
      setLoading(false);
    });
    video.addEventListener('canplay', () => {
      mediaFailed = false;
      setError(false);
      setLoading(false);
    });
    video.addEventListener('waiting', () => {
      if (userInitiated && !video.paused) setLoading(true);
    });
    video.addEventListener('pause', () => {
      syncPlayUi(false);
      setLoading(false);
    });
    video.addEventListener('ended', () => {
      hasStarted = false;
      syncPlayUi(false);
      setLoading(false);
    });
    video.addEventListener('error', () => {
      hasStarted = false;
      mediaFailed = true;
      setLoading(false);
      syncPlayUi(false);
      if (userInitiated) setError(true);
    });
    video.addEventListener('timeupdate', () => syncScrubUi(video.currentTime, video.duration));

    if (frame) {
      frame.addEventListener('keydown', (e) => {
        const target = e.target;
        const isButton = target && target.closest && target.closest('button, [role="slider"]');
        if (e.key === ' ' && !isButton) {
          e.preventDefault();
          togglePlayWithFlash();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.key !== 'k' && e.key !== 'K' && e.code !== 'KeyK') || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
      const rect = frame ? frame.getBoundingClientRect() : null;
      const inView = rect ? rect.bottom > 0 && rect.top < window.innerHeight : false;
      if (hasStarted || inView) {
        e.preventDefault();
        togglePlayWithFlash();
      }
    });

    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        speedIdx = (speedIdx + 1) % speeds.length;
        const rate = speeds[speedIdx];
        video.playbackRate = rate;
        speedBtn.textContent = rate + 'x';
        speedBtn.classList.toggle('is-boosted', rate !== 1);
        speedBtn.setAttribute('aria-label', 'تبديل سرعة الفيديو: ' + rate + 'x');
      });
    }

    if (scrub) {
      function stopDrag() {
        dragging = false;
        scrub.classList.remove('is-dragging');
        scrub.classList.remove('is-tip-visible');
      }
      scrub.addEventListener('pointerenter', (e) => {
        updateScrubTip(e.clientX);
      });
      scrub.addEventListener('pointerdown', (e) => {
        dragging = true;
        scrub.classList.add('is-dragging');
        if (scrub.setPointerCapture) {
          try {
            scrub.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
        seekToClientX(e.clientX);
        updateScrubTip(e.clientX);
      });
      scrub.addEventListener('pointermove', (e) => {
        updateScrubTip(e.clientX);
        if (dragging) seekToClientX(e.clientX);
      });
      scrub.addEventListener('pointerleave', () => {
        if (!dragging) scrub.classList.remove('is-tip-visible');
      });
      scrub.addEventListener('pointerup', stopDrag);
      scrub.addEventListener('pointercancel', stopDrag);

      scrub.addEventListener('keydown', (e) => {
        const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : VSL_DURATION;
        let nextTime = null;
        if (e.key === 'ArrowRight') nextTime = Math.min(dur, video.currentTime + 5);
        else if (e.key === 'ArrowLeft') nextTime = Math.max(0, video.currentTime - 5);
        else if (e.key === 'PageUp') nextTime = Math.min(dur, video.currentTime + 15);
        else if (e.key === 'PageDown') nextTime = Math.max(0, video.currentTime - 15);
        else if (e.key === 'Home') nextTime = 0;
        else if (e.key === 'End') nextTime = dur;
        else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePlay();
          return;
        }
        if (nextTime !== null) {
          e.preventDefault();
          seekToTime(nextTime);
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        const onIcon = muteBtn.querySelector('[data-icon="vol-on"]');
        const offIcon = muteBtn.querySelector('[data-icon="vol-off"]');
        setNodeHidden(onIcon, video.muted);
        setNodeHidden(offIcon, !video.muted);
        muteBtn.setAttribute('aria-label', video.muted ? 'رجّع الصوت' : 'كتم الصوت');
      });
    }

    if (fsBtn && frame) {
      fsBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (frame.requestFullscreen) {
          frame.requestFullscreen().catch(() => {});
        } else if (video.webkitEnterFullscreen && video.readyState >= 1) {
          try {
            video.webkitEnterFullscreen();
          } catch (_) {}
        }
      });
    }
  }

  // 2. Dual Payment Switcher & Guided 1-Tap Copy
  function initPayments() {
    const allTabs = Array.from(document.querySelectorAll('[data-pay-tab]'));
    const labelEls = Array.from(document.querySelectorAll('[data-pay-label]'));
    const nowEls = Array.from(document.querySelectorAll('[data-pay-now]'));
    const valEls = Array.from(document.querySelectorAll('[data-pay-value]'));
    const waLinks = Array.from(document.querySelectorAll('[data-pay-wa-link]'));
    const copyBtns = Array.from(document.querySelectorAll('.copy-btn'));
    const copyRows = Array.from(document.querySelectorAll('.copy-row'));
    const receiptBlocks = Array.from(document.querySelectorAll('.receipt-block'));
    const copyTriggers = Array.from(document.querySelectorAll('[data-copy-trigger]'));
    const statusEls = Array.from(document.querySelectorAll('[data-copy-status]'));
    if (!allTabs.length) return;

    let currentMethod = 'baridimob';
    let btnTimer = null;
    let hintTimer = null;

    function clearCopyTimers() {
      if (btnTimer) {
        clearTimeout(btnTimer);
        btnTimer = null;
      }
      if (hintTimer) {
        clearTimeout(hintTimer);
        hintTimer = null;
      }
    }

    function setCopiedVisual(copied) {
      copyBtns.forEach((btn) => {
        btn.classList.toggle('is-copied', copied);
        const copyIcon = btn.querySelector('[data-copy-icon="copy"]');
        const checkIcon = btn.querySelector('[data-copy-icon="check"]');
        const label = btn.querySelector('[data-copy-label]');
        setNodeHidden(copyIcon, copied);
        setNodeHidden(checkIcon, !copied);
        if (label) label.textContent = copied ? 'تم النسخ' : 'نسخ';
      });
      copyRows.forEach((row) => row.classList.toggle('is-copied-flash', copied));
      receiptBlocks.forEach((block) => block.classList.toggle('is-ready', copied));
      waLinks.forEach((link) => {
        if (copied) {
          link.classList.remove('is-ready');
          void link.offsetWidth;
          link.classList.add('is-ready');
        } else {
          link.classList.remove('is-ready');
        }
      });
    }

    function runPaymentTransition(updateFn, useTransition) {
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (useTransition && !reducedMotion && typeof document.startViewTransition === 'function') {
        document.startViewTransition(updateFn);
      } else {
        updateFn();
      }
    }

    function setMethod(method, shouldFocus = false, useTransition = false) {
      const cfg = PAYMENT_METHODS[method];
      if (!cfg) return;
      currentMethod = method;
      clearCopyTimers();

      runPaymentTransition(() => {
        setCopiedVisual(false);
        waLinks.forEach((link) => link.classList.remove('is-ready'));
        statusEls.forEach((el) => {
          el.textContent = '';
          el.classList.remove('is-warn');
          el.hidden = true;
        });

        allTabs.forEach((tab) => {
          const active = tab.getAttribute('data-pay-tab') === method;
          tab.classList.toggle('is-active', active);
          tab.setAttribute('aria-selected', String(active));
          tab.setAttribute('tabindex', active ? '0' : '-1');
          if (active && shouldFocus) tab.focus();
          const panelId = tab.getAttribute('aria-controls');
          if (active && panelId) {
            const panel = document.getElementById(panelId);
            if (panel) panel.setAttribute('aria-labelledby', tab.id);
          }
        });

        const priceDir = method === 'redotpay' ? 'ltr' : 'rtl';
        labelEls.forEach((el) => { el.textContent = cfg.label; });
        nowEls.forEach((el) => {
          el.textContent = cfg.now;
          el.setAttribute('dir', priceDir);
        });
        valEls.forEach((el) => { el.textContent = cfg.account; });
        waLinks.forEach((link) => { link.href = WA_BASE + encodeURIComponent(cfg.waText); });
      }, useTransition);
    }

    allTabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => setMethod(tab.getAttribute('data-pay-tab'), false, true));
      tab.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') nextIdx = (idx + 1) % allTabs.length;
        else if (e.key === 'Home') nextIdx = 0;
        else if (e.key === 'End') nextIdx = allTabs.length - 1;
        if (nextIdx !== null) {
          e.preventDefault();
          setMethod(allTabs[nextIdx].getAttribute('data-pay-tab'), true, true);
        }
      });
    });

    function selectElementText(el) {
      if (!el || !window.getSelection || !document.createRange) return;
      try {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
        }
      } catch (_) {}
    }

    function fallbackCopy(val) {
      const previousActive = document.activeElement;
      const ta = document.createElement('textarea');
      ta.value = val;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '-9999px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      let ok = false;
      try {
        ta.focus({ preventScroll: true });
      } catch (_) {
        ta.focus();
      }
      ta.select();
      try {
        ta.setSelectionRange(0, val.length);
      } catch (_) {}
      try {
        ok = document.execCommand('copy') === true;
      } catch (_) {
        ok = false;
      }
      document.body.removeChild(ta);
      if (previousActive && typeof previousActive.focus === 'function') {
        try {
          previousActive.focus({ preventScroll: true });
        } catch (_) {
          previousActive.focus();
        }
      }
      return ok;
    }

    function triggerCopy(sourceEl = null) {
      const cfg = PAYMENT_METHODS[currentMethod];
      const text = cfg.account;

      function onSuccess() {
        clearCopyTimers();
        setCopiedVisual(true);
        statusEls.forEach((el) => {
          el.classList.remove('is-warn');
          el.textContent = cfg.copiedHint;
          el.hidden = false;
        });
        trackEvent('CopyPaymentID', { method: currentMethod });
        btnTimer = setTimeout(() => {
          setCopiedVisual(false);
          btnTimer = null;
        }, 5500);
        hintTimer = setTimeout(() => {
          statusEls.forEach((el) => {
            el.textContent = '';
            el.classList.remove('is-warn');
            el.hidden = true;
          });
          hintTimer = null;
        }, 5500);
      }

      function onManualFallback() {
        clearCopyTimers();
        setCopiedVisual(false);
        const row = sourceEl && sourceEl.closest ? sourceEl.closest('.copy-row') : null;
        const targetEl =
          (row && row.querySelector('[data-pay-value]')) ||
          valEls.find((el) => el.getClientRects().length > 0) ||
          valEls[0];
        if (targetEl) selectElementText(targetEl);
        statusEls.forEach((el) => {
          el.classList.add('is-warn');
          el.textContent = 'المتصفح حبس النسخ التلقائي — أبويي مطوّل على الرقم فوق ودير Copier بيدك.';
          el.hidden = false;
        });
        hintTimer = setTimeout(() => {
          statusEls.forEach((el) => {
            el.textContent = '';
            el.classList.remove('is-warn');
            el.hidden = true;
          });
          hintTimer = null;
        }, 7500);
      }

      if (window.isSecureContext && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard
          .writeText(text)
          .then(onSuccess)
          .catch(() => (fallbackCopy(text) ? onSuccess() : onManualFallback()));
      } else if (fallbackCopy(text)) {
        onSuccess();
      } else {
        onManualFallback();
      }
    }

    copyTriggers.forEach((el) => el.addEventListener('click', () => triggerCopy(el)));
    valEls.forEach((el) => {
      const activate = () => {
        selectElementText(el);
        triggerCopy(el);
      };
      el.addEventListener('click', activate);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });

    setMethod('baridimob', false, false);
  }

  // 3. FAQ Accordion & Navigation Tracking
  function initFaqAndTracking() {
    document.querySelectorAll('[data-faq-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : null;
        const nextOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(nextOpen));
        if (panel) {
          panel.classList.toggle('is-open', nextOpen);
          panel.setAttribute('aria-hidden', String(!nextOpen));
          panel.inert = !nextOpen;
        }
      });
    });

    document.querySelectorAll('[data-track-jump]').forEach((el) => {
      el.addEventListener('click', () => {
        const eventName = el.getAttribute('data-track-jump');
        const source = el.getAttribute('data-track-source') || 'page';
        if (eventName) trackEvent(eventName, { source });
      });
    });

    document.querySelectorAll('[data-track]').forEach((el) => {
      el.addEventListener('click', () => {
        const eventName = el.getAttribute('data-track');
        if (!eventName) return;
        trackEvent(eventName, {
          channel: eventName.includes('Instagram') ? 'instagram' : 'whatsapp',
          intent: eventName.includes('Receipt') ? 'receipt' : 'inquiry'
        });
      });
    });
  }

  // 4. Active Section Indicator & Cinema Playhead Fallback
  function initNavSpy() {
    const topbar = document.querySelector('.topbar');
    const links = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));
    const sections = links
      .map((link) => {
        const id = link.getAttribute('href').slice(1);
        const el = id ? document.getElementById(id) : null;
        return el ? { el, link } : null;
      })
      .filter(Boolean);
    if (!sections.length) return;

    function setActive(activeLink) {
      links.forEach((link) => {
        const on = link === activeLink;
        link.classList.toggle('is-active', on);
        if (on) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }

    function syncNav() {
      const vh = window.innerHeight;
      const docEl = document.documentElement;
      const docH = docEl.scrollHeight;
      if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 24);
      if (typeof CSS === 'undefined' || typeof CSS.supports !== 'function' || !CSS.supports('animation-timeline', 'scroll()')) {
        const maxScroll = Math.max(1, docH - vh);
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        docEl.style.setProperty('--scroll-progress', progress.toFixed(4));
      }
      if (window.scrollY < 320) {
        setActive(null);
        return;
      }
      if (vh + window.scrollY >= docH - 40) {
        setActive(sections[sections.length - 1].link);
        return;
      }
      let current = null;
      for (const item of sections) {
        const rect = item.el.getBoundingClientRect();
        if (rect.top <= vh * 0.45 && rect.bottom > 80) {
          current = item.link;
        }
      }
      setActive(current);
    }

    let rafPending = false;
    function scheduleSync() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        syncNav();
      });
    }

    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync, { passive: true });
    syncNav();
  }

  initPixels();
  initVideoPlayer();
  initPayments();
  initFaqAndTracking();
  initNavSpy();
  trackEvent('ViewContent');
})();
