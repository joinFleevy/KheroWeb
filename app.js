(() => {
  'use strict';

  // Ad Pixel hooks: fill IDs when Khero launches IG/TikTok campaigns
  const TRACKING = {
    metaPixelId: '',
    tiktokPixelId: ''
  };

  function trackEvent(name, params = {}) {
    if (TRACKING.metaPixelId && typeof window.fbq === 'function') {
      window.fbq('trackCustom', name, params);
    }
    if (TRACKING.tiktokPixelId && typeof window.ttq === 'object' && typeof window.ttq.track === 'function') {
      window.ttq.track(name, params);
    }
  }

  const PAYMENT_METHODS = {
    baridimob: {
      tabId: 'pay-tab-baridimob',
      label: 'RIP BaridiMob',
      account: '00799999004277833193',
      now: '4,900 دج',
      old: '5,400 دج',
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ BaridiMob (4,900 دج) وهاهو وصل الدفع:'
    },
    redotpay: {
      tabId: 'pay-tab-redotpay',
      label: 'RedotPay ID',
      account: '1743900815',
      now: '$18',
      old: '$20',
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ RedotPay ($18) وهاهو وصل الدفع:'
    }
  };

  const WA_BASE = 'https://wa.me/213553218024?text=';

  function formatTime(secs) {
    if (!Number.isFinite(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  // 1. Custom VSL Player (with full keyboard + pointer-drag scrub & ARIA sync)
  function initVideoPlayer() {
    const video = document.getElementById('vsl-video');
    const overlay = document.getElementById('vsl-overlay');
    const playBtn = document.getElementById('vsl-play-btn');
    const muteBtn = document.getElementById('vsl-mute-btn');
    const fsBtn = document.getElementById('vsl-fs-btn');
    const scrub = document.getElementById('vsl-scrub');
    const scrubFill = document.getElementById('vsl-scrub-fill');
    const timeEl = document.getElementById('vsl-time');
    const frame = document.getElementById('vsl-frame');
    if (!video || !overlay || !playBtn) return;

    let trackedStart = false;
    let dragging = false;

    function syncPlayIcons(isPlaying) {
      const playIcon = playBtn.querySelector('[data-icon="play"]');
      const pauseIcon = playBtn.querySelector('[data-icon="pause"]');
      if (playIcon) playIcon.hidden = isPlaying;
      if (pauseIcon) pauseIcon.hidden = !isPlaying;
      playBtn.setAttribute('aria-label', isPlaying ? 'حبّس الفيديو' : 'شغّل الفيديو');
      overlay.classList.toggle('is-hidden', isPlaying);
      overlay.setAttribute('aria-hidden', String(isPlaying));
      overlay.inert = isPlaying;
    }

    function syncScrubUi(cur, dur) {
      const safeDur = dur || 175.24;
      const pct = Math.min(100, Math.max(0, (cur / safeDur) * 100));
      if (scrubFill) scrubFill.style.width = pct.toFixed(2) + '%';
      if (timeEl) timeEl.textContent = formatTime(cur) + ' / ' + formatTime(safeDur);
      if (scrub) {
        scrub.setAttribute('aria-valuenow', String(Math.round(pct)));
        scrub.setAttribute('aria-valuetext', formatTime(cur) + ' / ' + formatTime(safeDur));
      }
    }

    function seekToClientX(clientX) {
      if (!scrub) return;
      const rect = scrub.getBoundingClientRect();
      const dur = video.duration || 175.24;
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      video.currentTime = ratio * dur;
      syncScrubUi(video.currentTime, dur);
    }

    function togglePlay() {
      if (video.paused || video.ended) {
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
        if (!trackedStart) {
          trackedStart = true;
          trackEvent('VSLPlay');
        }
      } else {
        video.pause();
      }
    }

    overlay.addEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', () => syncPlayIcons(true));
    video.addEventListener('pause', () => syncPlayIcons(false));
    video.addEventListener('ended', () => syncPlayIcons(false));

    video.addEventListener('timeupdate', () => {
      syncScrubUi(video.currentTime, video.duration);
    });

    if (scrub) {
      scrub.addEventListener('pointerdown', (e) => {
        dragging = true;
        if (scrub.setPointerCapture) scrub.setPointerCapture(e.pointerId);
        seekToClientX(e.clientX);
      });
      scrub.addEventListener('pointermove', (e) => {
        if (dragging) seekToClientX(e.clientX);
      });
      scrub.addEventListener('pointerup', () => { dragging = false; });
      scrub.addEventListener('pointercancel', () => { dragging = false; });

      scrub.addEventListener('keydown', (e) => {
        const dur = video.duration || 175.24;
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
          video.currentTime = nextTime;
          syncScrubUi(nextTime, dur);
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        const onIcon = muteBtn.querySelector('[data-icon="vol-on"]');
        const offIcon = muteBtn.querySelector('[data-icon="vol-off"]');
        if (onIcon) onIcon.hidden = video.muted;
        if (offIcon) offIcon.hidden = !video.muted;
        muteBtn.setAttribute('aria-label', video.muted ? 'رجّع الصوت' : 'كتم الصوت');
      });
    }

    if (fsBtn && frame) {
      fsBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (frame.requestFullscreen) {
          frame.requestFullscreen().catch(() => {});
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      });
    }
  }

  // 2. Hero Secondary CTA Inline Human Chat Reveal + Tracking
  function initHeroActions() {
    const toggleBtn = document.getElementById('hero-chat-toggle');
    const inlineChat = document.getElementById('hero-inline-chat');
    if (toggleBtn && inlineChat) {
      toggleBtn.addEventListener('click', () => {
        const nextOpen = inlineChat.hidden;
        inlineChat.hidden = !nextOpen;
        toggleBtn.setAttribute('aria-expanded', String(nextOpen));
        if (nextOpen) trackEvent('ContactHeroToggle');
      });
    }

    document.querySelectorAll('[data-scroll-enroll]').forEach((el) => {
      el.addEventListener('click', () => {
        trackEvent('InitiateCheckout', { source: el.getAttribute('data-scroll-enroll') || 'page' });
      });
    });

    document.querySelectorAll('[data-track]').forEach((el) => {
      el.addEventListener('click', () => {
        trackEvent(el.getAttribute('data-track'));
      });
    });
  }

  // 3. Signature NLE Timeline Scrubber + 6-Module Curriculum Sync
  function initCurriculum() {
    const tracks = Array.from(document.querySelectorAll('[data-module-track]'));
    const triggers = Array.from(document.querySelectorAll('[data-module-trigger]'));
    const panels = Array.from(document.querySelectorAll('[data-module-panel]'));
    const playhead = document.getElementById('nle-playhead');
    if (!triggers.length) return;

    function selectModule(idx) {
      tracks.forEach((btn, i) => {
        const active = i === idx;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      triggers.forEach((btn, i) => {
        btn.setAttribute('aria-expanded', String(i === idx));
      });
      panels.forEach((panel, i) => {
        panel.hidden = i !== idx;
      });
      if (playhead) {
        playhead.style.transform = `translateX(${-idx * 100}%)`;
      }
    }

    tracks.forEach((btn, idx) => {
      btn.addEventListener('click', () => selectModule(idx));
    });

    triggers.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          btn.setAttribute('aria-expanded', 'false');
          if (panels[idx]) panels[idx].hidden = true;
        } else {
          selectModule(idx);
        }
      });
    });

    selectModule(0);
  }

  // 4. Zero-Form Dual-Door Payment Switcher (WAI-ARIA tablist + Clipboard Copy)
  function initPaymentDeck() {
    const tabs = Array.from(document.querySelectorAll('[data-pay-tab]'));
    const panelEl = document.getElementById('pay-panel');
    const labelEl = document.getElementById('pay-account-label');
    const nowEl = document.getElementById('pay-amount-now');
    const oldEl = document.getElementById('pay-amount-old');
    const codeEl = document.getElementById('pay-account-value');
    const copyBtn = document.getElementById('pay-copy-btn');
    const copyStatus = document.getElementById('pay-copy-status');
    const waReceiptLink = document.getElementById('pay-receipt-wa');
    if (!tabs.length || !codeEl || !copyBtn) return;

    let currentMethod = 'baridimob';
    let copyTimer = null;

    function setMethod(method, focusTab = false) {
      const cfg = PAYMENT_METHODS[method];
      if (!cfg) return;
      currentMethod = method;
      tabs.forEach((tab) => {
        const active = tab.getAttribute('data-pay-tab') === method;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (active && focusTab) tab.focus();
      });
      if (panelEl) panelEl.setAttribute('aria-labelledby', cfg.tabId);
      if (labelEl) labelEl.textContent = cfg.label;
      if (nowEl) nowEl.textContent = cfg.now;
      if (oldEl) oldEl.textContent = cfg.old;
      codeEl.textContent = cfg.account;
      if (waReceiptLink) {
        waReceiptLink.href = WA_BASE + encodeURIComponent(cfg.waText);
      }
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        setMethod(tab.getAttribute('data-pay-tab'));
      });
      tab.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          nextIdx = (idx + 1) % tabs.length;
        } else if (e.key === 'Home') {
          nextIdx = 0;
        } else if (e.key === 'End') {
          nextIdx = tabs.length - 1;
        }
        if (nextIdx !== null) {
          e.preventDefault();
          setMethod(tabs[nextIdx].getAttribute('data-pay-tab'), true);
        }
      });
    });

    copyBtn.addEventListener('click', () => {
      const cfg = PAYMENT_METHODS[currentMethod];
      const text = cfg.account;
      const done = () => {
        if (copyTimer) clearTimeout(copyTimer);
        const label = copyBtn.querySelector('[data-copy-label]');
        if (label) label.textContent = 'تم النسخ';
        if (copyStatus) copyStatus.textContent = 'تم نسخ الرقم: ' + text;
        trackEvent('CopyPaymentID', { method: currentMethod });
        copyTimer = setTimeout(() => {
          if (label) label.textContent = 'نسخ';
          if (copyStatus) copyStatus.textContent = '';
          copyTimer = null;
        }, 1800);
      };

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      } else {
        fallbackCopy(text, done);
      }
    });

    function fallbackCopy(val, cb) {
      const ta = document.createElement('textarea');
      ta.value = val;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (_) {}
      document.body.removeChild(ta);
      cb();
    }

    setMethod('baridimob');
  }

  // 5. FAQ Accordion
  function initFaq() {
    const btns = Array.from(document.querySelectorAll('[data-faq-btn]'));
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : null;
        const nextOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(nextOpen));
        if (panel) panel.hidden = !nextOpen;
      });
    });
  }

  // 6. Sticky Mobile CTA Visibility (inert + aria-hidden when tucked away)
  function initStickyMobileBar() {
    const bar = document.getElementById('mobile-sticky');
    const hero = document.getElementById('hero');
    const enroll = document.getElementById('enroll');
    if (!bar || !hero || !enroll || typeof IntersectionObserver === 'undefined') return;

    let heroVisible = true;
    let enrollVisible = false;

    function update() {
      const visible = !heroVisible && !enrollVisible;
      bar.classList.toggle('is-visible', visible);
      bar.setAttribute('aria-hidden', String(!visible));
      bar.inert = !visible;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === enroll) enrollVisible = entry.isIntersecting;
      });
      update();
    }, { threshold: 0.12 });

    observer.observe(hero);
    observer.observe(enroll);
    update();
  }

  initVideoPlayer();
  initHeroActions();
  initCurriculum();
  initPaymentDeck();
  initFaq();
  initStickyMobileBar();
  trackEvent('ViewContent');
})();
