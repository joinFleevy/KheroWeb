(() => {
  'use strict';

  // Ad Pixel IDs: paste Meta Pixel ID or TikTok Pixel ID here when launching campaigns
  const TRACKING = {
    metaPixelId: '',
    tiktokPixelId: ''
  };

  const STANDARD_EVENT_MAP = {
    ViewContent: 'ViewContent',
    QuickPayOpen: 'InitiateCheckout',
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

  const MODULES = [
    {
      code: '01 / 06',
      tag: 'من الصفر',
      title: 'أساسيات المونتاج',
      summary: 'العفسة الأولى اللي تقابلك كي تدخل: حتى إذا جامي خدمت بـ CapCut في البيسي، هنا تتعلم البيزيك كاملين. وحتى إذا بديت ديجا، نوريلك عفايس في الأساسيات ماشي أي واحد يعرفهم.',
      points: [
        'واجهة CapCut PC وأفضل الإعدادات من البداية',
        'الاختصارات اللي تسرّعلك القص والخدمة',
        'السرعة، النصوص، الماسك، وتصحيح الألوان',
        'أساسيات تخليك تخدم بنظام ومن غير تعب'
      ]
    },
    {
      code: '02 / 06',
      tag: 'خفايا CapCut',
      title: 'لازم تعرف (وحل الـ PC الضعيف)',
      summary: 'هنا نوريلك ليزوپسيون الصغيرة اللي ما يعرفهاش أي واحد وتعاونك بزاف، وكيفاش تدير التغذية البصرية، ومع اللخر الأوپسيون اللي تخلّيك تدير مونتاج حتى على PC ضعيف.',
      points: [
        'طريقة العمل السلس على PC ضعيف بلا بلوكاج',
        'كيفاش تبني التغذية البصرية باش يجيوك أفكار قوية',
        'المصادر وين نجيبو الفيديوهات والتصاور والملفات مجاناً',
        'خفايا CapCut اللي توفرلك نص وقت المونتاج'
      ]
    },
    {
      code: '03 / 06',
      tag: 'التقنيات الصح',
      title: 'المونتاج المتقدم',
      summary: 'هنا ندخلو للصح: العفايس اللي أوبليجي عليك تتعلمهم ودي فوا تعاودهم كل فيديو، خاطر بلا بيهم ما تقدرش تافونسي في المونتاج.',
      points: [
        'الـ Keyframes والحركات الاحترافية بالـ Graphs',
        'الـ Compound Clips وصناعة البريسيت الخاصة بيك',
        'الزوم، الـ Tracking، والموشن غرافيك النظيف',
        'دمج المؤثرات الصوتية بالطريقة اللي تشد الانتباه'
      ]
    },
    {
      code: '04 / 06',
      tag: 'متجدد ديما',
      title: 'أفكار المونتاج وتحديثات الترند',
      summary: 'نوريلك أفكار المونتاج المطلوبة في الريلز والشورتس، وكل ما يخرج ترند ولا عفسة جديدة في السوق نحطلك فيديو يشرحلك كيفاش تخدمها.',
      points: [
        'تحريك العناصر ورا الشخص والإضاءة المتفاعلة',
        'ستايلات الـ Glow والظلال والكتابة الحديثة',
        'دروس جديدة تضاف أوتوماتيكياً مع كل ترند جديد'
      ]
    },
    {
      code: '05 / 06',
      tag: '2 إلى 3 مشاريع/شهر',
      title: 'تطبيقات ومشاريع كاملة',
      summary: 'تشوفني أنا شخصياً نخدم مشاريع كاملة من الأول حتى اللخر: نجيبو ستايلات مختلفين ونطبقوهم قدامك، ونزيدلك 2 حتى 3 مشاريع جديدة كل شهر.',
      points: [
        'تفهم وقتاش تستعمل كل تقنية من غير عشوائية',
        'مشاريع بستايلات متنوعة تقدر دير كيفها للي كليون',
        'إضافة مستمرة لمشاريع جديدة كل شهر في الدورة'
      ]
    },
    {
      code: '06 / 06',
      tag: 'مصدر رزق',
      title: 'كيفاش تجيب لي كليون',
      summary: 'إذا تعرف تدير مونتاج وما تعرفش تجيب لي كليون كي اللي ما درت والو. نوريلك كيفاش جبتهم أنا على حسب تجربتي والأغلاط اللي لازم تفيتيهم باش ما تبقاش بلا خدمة.',
      points: [
        'خطوات حقيقية مجربة كيفاش تلقى وتقنع أول كليون',
        'الأغلاط اللي تضيّع لي كليون وكيفاش تفيتيهم',
        'المتفوقين اللي يخدمو سيرييو يخدمو معايا مباشرة'
      ]
    }
  ];

  const PAYMENT_METHODS = {
    baridimob: {
      label: 'RIP BaridiMob',
      account: '00799999004277833193',
      now: '4,900 دج',
      old: '5,400 دج',
      copiedHint: 'تم نسخ RIP — افتح تطبيق BaridiMob، حوّل 4,900 دج، وابعثلي صورة الوصل تحت.',
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ BaridiMob (4,900 دج) وهاهو وصل الدفع:'
    },
    redotpay: {
      label: 'RedotPay ID',
      account: '1743900815',
      now: '$18',
      old: '$20',
      copiedHint: 'تم نسخ RedotPay ID — افتح RedotPay، حوّل \u2066$18\u2069، وابعثلي صورة الوصل تحت.',
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

  // 1. Custom VSL Player (Chapters, 1x-1.5x Speed, Buffering/Error UX, Keyboard + Pointer Scrub)
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
    const timeEl = document.getElementById('vsl-time');
    const frame = document.getElementById('vsl-frame');
    const chapterChips = Array.from(document.querySelectorAll('[data-seek]'));
    if (!video || !overlay || !playBtn) return;

    const speeds = [1, 1.25, 1.5];
    let speedIdx = 0;
    let trackedStart = false;
    let userInitiated = false;
    let mediaFailed = false;
    let dragging = false;

    function setLoading(loading) {
      if (loader) loader.hidden = !loading;
    }

    function setError(hasError) {
      if (errorBox) errorBox.hidden = !hasError;
    }

    function syncPlayIcons(isPlaying) {
      const playIcon = playBtn.querySelector('[data-icon="play"]');
      const pauseIcon = playBtn.querySelector('[data-icon="pause"]');
      if (playIcon) playIcon.hidden = isPlaying;
      if (pauseIcon) pauseIcon.hidden = !isPlaying;
      playBtn.setAttribute('aria-label', isPlaying ? 'حبّس الفيديو' : 'شغّل الفيديو');
      if (isPlaying && document.activeElement === overlay) {
        playBtn.focus();
      }
      overlay.classList.toggle('is-hidden', isPlaying);
      overlay.setAttribute('aria-hidden', String(isPlaying));
      overlay.inert = isPlaying;
    }

    function syncChapters(curTime) {
      if (!chapterChips.length) return;
      let activeIdx = 0;
      chapterChips.forEach((chip, i) => {
        const start = Number(chip.getAttribute('data-seek') || '0');
        if (curTime >= start - 0.5) activeIdx = i;
      });
      chapterChips.forEach((chip, i) => {
        const on = i === activeIdx;
        chip.classList.toggle('is-active', on);
        chip.setAttribute('aria-pressed', String(on));
      });
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
      syncChapters(clamped);
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

    overlay.addEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('play', () => {
      syncPlayIcons(true);
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
      syncPlayIcons(false);
      setLoading(false);
    });
    video.addEventListener('ended', () => {
      syncPlayIcons(false);
      setLoading(false);
    });
    video.addEventListener('error', () => {
      mediaFailed = true;
      setLoading(false);
      syncPlayIcons(false);
      if (userInitiated) setError(true);
    });
    video.addEventListener('timeupdate', () => syncScrubUi(video.currentTime, video.duration));

    if (frame) {
      frame.addEventListener('keydown', (e) => {
        const target = e.target;
        const isButton = target && target.closest && target.closest('button, [role="slider"]');
        if (isButton) return;
        if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
          e.preventDefault();
          togglePlay();
        }
      });
    }

    chapterChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const secs = Number(chip.getAttribute('data-seek') || '0');
        seekToTime(secs);
        startPlayback();
        trackEvent('VSLChapter', { seconds: secs });
      });
    });

    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        speedIdx = (speedIdx + 1) % speeds.length;
        const rate = speeds[speedIdx];
        video.playbackRate = rate;
        speedBtn.textContent = rate + 'x';
        speedBtn.setAttribute('aria-label', 'تبديل سرعة الفيديو: ' + rate + 'x');
      });
    }

    if (scrub) {
      function stopDrag() {
        dragging = false;
        scrub.classList.remove('is-dragging');
      }
      scrub.addEventListener('pointerdown', (e) => {
        dragging = true;
        scrub.classList.add('is-dragging');
        if (scrub.setPointerCapture) {
          try {
            scrub.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
        seekToClientX(e.clientX);
      });
      scrub.addEventListener('pointermove', (e) => {
        if (dragging) seekToClientX(e.clientX);
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
        } else if (video.webkitEnterFullscreen && video.readyState >= 1) {
          try {
            video.webkitEnterFullscreen();
          } catch (_) {}
        }
      });
    }
  }

  // 2. Unified Single-Stage 6-Module Curriculum
  function initCurriculum() {
    const tabs = Array.from(document.querySelectorAll('[data-mod-tab]'));
    const inspector = document.getElementById('mod-inspector');
    const titleEl = document.getElementById('mod-title');
    const codeEl = document.getElementById('mod-code');
    const tagEl = document.getElementById('mod-tag');
    const summaryEl = document.getElementById('mod-summary');
    const bulletsEl = document.getElementById('mod-bullets');
    const prevBtn = document.getElementById('mod-prev');
    const nextBtn = document.getElementById('mod-next');
    if (!tabs.length || !inspector || !bulletsEl) return;

    let currentIdx = 0;

    function createBulletNode(text) {
      const li = document.createElement('li');
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('class', 'inspector-stage__check');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      const poly = document.createElementNS(svgNS, 'polyline');
      poly.setAttribute('points', '20 6 9 17 4 12');
      svg.appendChild(poly);
      const span = document.createElement('span');
      span.textContent = text;
      li.appendChild(svg);
      li.appendChild(span);
      return li;
    }

    function selectModule(idx, focusTab = false) {
      const safeIdx = ((idx % MODULES.length) + MODULES.length) % MODULES.length;
      const mod = MODULES[safeIdx];
      currentIdx = safeIdx;

      tabs.forEach((tab, i) => {
        const active = i === safeIdx;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (active) {
          if (focusTab) tab.focus();
          const rail = tab.parentElement;
          if (rail && window.innerWidth <= 860 && typeof rail.scrollBy === 'function') {
            const rRect = rail.getBoundingClientRect();
            const tRect = tab.getBoundingClientRect();
            const delta = tRect.left + tRect.width / 2 - (rRect.left + rRect.width / 2);
            const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            rail.scrollBy({ left: delta, behavior: reduced ? 'auto' : 'smooth' });
          }
        }
      });

      inspector.setAttribute('aria-labelledby', tabs[safeIdx].id);
      if (titleEl) titleEl.textContent = mod.title;
      if (codeEl) codeEl.textContent = mod.code;
      if (tagEl) tagEl.textContent = mod.tag;
      if (summaryEl) summaryEl.textContent = mod.summary;

      bulletsEl.replaceChildren(...mod.points.map(createBulletNode));
      trackEvent('CurriculumStep', { module: safeIdx + 1 });
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => selectModule(idx));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = idx + 1;
        else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = idx - 1;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          selectModule(next, true);
        }
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => selectModule(currentIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => selectModule(currentIdx + 1));

    return selectModule;
  }

  // 3. Synchronized Dual Payment Switcher & Guided 1-Tap Copy (Inline + Sheet + Mobile Sticky)
  function initPayments() {
    const allTabs = Array.from(document.querySelectorAll('[data-pay-tab]'));
    const labelEls = Array.from(document.querySelectorAll('[data-pay-label]'));
    const nowEls = Array.from(document.querySelectorAll('[data-pay-now]'));
    const oldEls = Array.from(document.querySelectorAll('[data-pay-old]'));
    const valEls = Array.from(document.querySelectorAll('[data-pay-value]'));
    const waLinks = Array.from(document.querySelectorAll('[data-pay-wa-link]'));
    const copyBtns = Array.from(document.querySelectorAll('.copy-btn'));
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

    function setMethod(method, focusGroup = null) {
      const cfg = PAYMENT_METHODS[method];
      if (!cfg) return;
      currentMethod = method;
      clearCopyTimers();
      setCopiedVisual(false);
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
        if (active && focusGroup && tab.getAttribute('data-pay-group') === focusGroup) {
          tab.focus();
        }
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
      oldEls.forEach((el) => {
        el.textContent = cfg.old;
        el.setAttribute('dir', priceDir);
      });
      valEls.forEach((el) => { el.textContent = cfg.account; });
      waLinks.forEach((link) => { link.href = WA_BASE + encodeURIComponent(cfg.waText); });
    }

    ['inline', 'sheet'].forEach((group) => {
      const groupTabs = allTabs.filter((t) => t.getAttribute('data-pay-group') === group);
      groupTabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => setMethod(tab.getAttribute('data-pay-tab')));
        tab.addEventListener('keydown', (e) => {
          let nextIdx = null;
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') nextIdx = (idx + 1) % groupTabs.length;
          else if (e.key === 'Home') nextIdx = 0;
          else if (e.key === 'End') nextIdx = groupTabs.length - 1;
          if (nextIdx !== null) {
            e.preventDefault();
            setMethod(groupTabs[nextIdx].getAttribute('data-pay-tab'), group);
          }
        });
      });
    });

    function setCopiedVisual(copied) {
      copyBtns.forEach((btn) => {
        btn.classList.toggle('is-copied', copied);
        const copyIcon = btn.querySelector('[data-copy-icon="copy"]');
        const checkIcon = btn.querySelector('[data-copy-icon="check"]');
        const label = btn.querySelector('[data-copy-label]');
        if (copyIcon) copyIcon.hidden = copied;
        if (checkIcon) checkIcon.hidden = !copied;
        if (label) label.textContent = copied ? 'تم النسخ' : 'نسخ';
      });
    }

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
        }, 2200);
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
          el.textContent = 'المتصفح منع النسخ التلقائي — اضغط مطوّلاً على الرقم فوق وانسخو يدوياً.';
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
      el.addEventListener('click', () => {
        selectElementText(el);
        triggerCopy(el);
      });
    });
    setMethod('baridimob');
  }

  // 4. Instant Slide-Up Quick-Pay & Human-Chat Sheet (Focus Management & inert background)
  function initActionSheet() {
    const pageRoot = document.getElementById('page-root');
    const sheet = document.getElementById('action-sheet');
    const titleEl = document.getElementById('sheet-title');
    const subEl = document.getElementById('sheet-sub');
    const payBody = document.getElementById('sheet-body-pay');
    const chatBody = document.getElementById('sheet-body-chat');
    const closeBtn = document.getElementById('sheet-close-btn');
    if (!pageRoot || !sheet || !payBody || !chatBody) return;

    let lastTrigger = null;

    function applySheetMode(mode) {
      const isPay = mode !== 'chat';
      payBody.hidden = !isPay;
      chatBody.hidden = isPay;
      if (titleEl) {
        titleEl.textContent = isPay ? '1. خلّص ديريكت وابعثلي الوصل' : 'احكي معايا الأول في واتساب ولا إنستا';
      }
      if (subEl) {
        subEl.textContent = isPay
          ? 'بلا فورمولار: انسخ الرقم، حوّل المبلغ، وابعثلي صورة الوصل.'
          : 'عادي بزاف تسقسي قبل ما تحوّل دراهمك: نجاوبك أنا شخصياً على أي سؤال.';
      }
    }

    function openSheet(mode, triggerEl = null) {
      lastTrigger = triggerEl || document.activeElement;
      applySheetMode(mode);
      sheet.hidden = false;
      pageRoot.inert = true;
      pageRoot.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.add('sheet-open');
      document.body.classList.add('sheet-open');
      requestAnimationFrame(() => sheet.classList.add('is-open'));
      if (closeBtn) closeBtn.focus();

      const source = triggerEl ? triggerEl.getAttribute('data-track-source') || 'page' : 'page';
      trackEvent(mode === 'chat' ? 'ChatSheetOpen' : 'QuickPayOpen', { source });
    }

    function closeSheet() {
      if (sheet.hidden) return;
      sheet.classList.remove('is-open');
      sheet.hidden = true;
      pageRoot.inert = false;
      pageRoot.removeAttribute('aria-hidden');
      document.documentElement.classList.remove('sheet-open');
      document.body.classList.remove('sheet-open');
      if (lastTrigger && typeof lastTrigger.focus === 'function') {
        lastTrigger.focus();
      }
      lastTrigger = null;
    }

    document.querySelectorAll('[data-open-sheet]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openSheet(btn.getAttribute('data-open-sheet'), btn);
      });
    });

    document.querySelectorAll('[data-switch-sheet]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextMode = btn.getAttribute('data-switch-sheet');
        applySheetMode(nextMode);
        if (closeBtn) closeBtn.focus();
      });
    });

    document.querySelectorAll('[data-sheet-close]').forEach((el) => {
      el.addEventListener('click', closeSheet);
    });

    document.addEventListener('keydown', (e) => {
      if (sheet.hidden) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSheet();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(
          sheet.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
        ).filter((el) => !el.closest('[hidden]') && el.getClientRects().length > 0);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && (document.activeElement === first || !sheet.contains(document.activeElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !sheet.contains(document.activeElement))) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  // 5. FAQ Accordion & General Link Tracking
  function initFaqAndTracking() {
    document.querySelectorAll('[data-faq-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : null;
        const nextOpen = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(nextOpen));
        if (panel) panel.hidden = !nextOpen;
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

  // 6. Dual Mobile Sticky Bar Visibility (inert + aria-hidden when tucked away)
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

  // 7. Interactive CapCut Craft & Weak-PC Proxy Lab
  function initCraftLab(selectModule) {
    const labTabs = Array.from(document.querySelectorAll('[data-lab-tab]'));
    const stage = document.getElementById('lab-stage');
    const descEl = document.getElementById('lab-desc');
    const codeEl = document.getElementById('lab-mode-code');
    const statusPill = document.getElementById('lab-status-pill');
    const screenEl = document.getElementById('lab-screen');
    const screenTitle = document.getElementById('lab-screen-title');
    const screenSub = document.getElementById('lab-screen-sub');
    const proxyToggleBtn = document.getElementById('lab-proxy-toggle');
    const jumpBtn = document.getElementById('lab-jump-mod');
    if (!labTabs.length || !stage || !screenEl) return;

    const LAB_MODES = {
      proxy: {
        desc: 'في المحور الثاني نوريلك الأوپسيون اللي تخلّيك تدير مونتاج سلس في CapCut PC حتى إذا البيسي تاعك ضعيف بزاف وبلا بلوكاج.',
        code: 'MOD_02 · PROXY_FIX',
        modIndex: 1,
        jumpLabel: 'شوف التفاصيل في المحور 02 ←'
      },
      mask: {
        desc: 'في المحور الثالث نوريلك تقنيات الماسك وتحريك العناصر والكتابة ورا الشخص باش الريلز تاعك تبان احترافية ديريكت.',
        code: 'MOD_03 · MASK_LAYERS',
        pill: '3 LAYERS · DEPTH',
        title: 'كتابة وعناصر ورا الشخص',
        sub: 'عزل النظرة والعمق داخل CapCut PC',
        modIndex: 2,
        jumpLabel: 'شوف التفاصيل في المحور 03 ←'
      },
      glow: {
        desc: 'في المحور الرابع نخدمو أفكار المونتاج والـ Glow والكتابة الحديثة مع الإيقاع، وزيد دروس تضاف أوتوماتيكياً مع كل ترند.',
        code: 'MOD_04 · GLOW_RHYTHM',
        pill: 'TREND_READY · FX',
        title: 'إضاءة متفاعلة وإيقاع مضبوط',
        sub: 'تناسق الصوت + الحركة + الـ SFX',
        modIndex: 3,
        jumpLabel: 'شوف التفاصيل في المحور 04 ←'
      }
    };

    let proxyOn = true;

    function renderProxyState() {
      if (proxyToggleBtn) {
        proxyToggleBtn.setAttribute('aria-pressed', String(proxyOn));
        proxyToggleBtn.textContent = proxyOn ? 'إعدادات المحور 02: مفعّلة' : 'بلا إعدادات: البيسي يتبلوكا';
      }
      screenEl.setAttribute('data-proxy-state', proxyOn ? 'on' : 'off');
      if (statusPill) {
        statusPill.textContent = proxyOn ? '60 FPS · SMOOTH' : '12 FPS · LAG';
        statusPill.classList.toggle('is-ok', proxyOn);
        statusPill.classList.toggle('is-lag', !proxyOn);
      }
      if (screenTitle) {
        screenTitle.textContent = proxyOn ? 'مونتاج سلس على PC ضعيف' : 'تقطيع وبلوكاج في التايملاين';
      }
      if (screenSub) {
        screenSub.textContent = proxyOn
          ? 'بلا بلوكاج في التايملاين · معاينة تفاعلية'
          : 'بدون إعدادات المحور الثاني (ثقيل في العرض)';
      }
    }

    function selectLabMode(mode, focusTab = false) {
      const cfg = LAB_MODES[mode];
      if (!cfg) return;

      labTabs.forEach((tab) => {
        const active = tab.getAttribute('data-lab-tab') === mode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (active) {
          stage.setAttribute('aria-labelledby', tab.id);
          if (focusTab) tab.focus();
        }
      });

      screenEl.setAttribute('data-lab-mode', mode);
      if (descEl) descEl.textContent = cfg.desc;
      if (codeEl) codeEl.textContent = cfg.code;
      if (proxyToggleBtn) proxyToggleBtn.hidden = mode !== 'proxy';
      if (jumpBtn) {
        jumpBtn.setAttribute('data-jump-mod', String(cfg.modIndex));
        jumpBtn.textContent = cfg.jumpLabel;
      }

      if (mode === 'proxy') {
        renderProxyState();
      } else {
        if (statusPill) {
          statusPill.textContent = cfg.pill;
          statusPill.classList.add('is-ok');
          statusPill.classList.remove('is-lag');
        }
        if (screenTitle) screenTitle.textContent = cfg.title;
        if (screenSub) screenSub.textContent = cfg.sub;
      }

      trackEvent('CraftLabTab', { mode });
    }

    labTabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => selectLabMode(tab.getAttribute('data-lab-tab')));
      tab.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') nextIdx = (idx + 1) % labTabs.length;
        else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') nextIdx = (idx - 1 + labTabs.length) % labTabs.length;
        else if (e.key === 'Home') nextIdx = 0;
        else if (e.key === 'End') nextIdx = labTabs.length - 1;
        if (nextIdx !== null) {
          e.preventDefault();
          selectLabMode(labTabs[nextIdx].getAttribute('data-lab-tab'), true);
        }
      });
    });

    if (proxyToggleBtn) {
      proxyToggleBtn.addEventListener('click', () => {
        proxyOn = !proxyOn;
        renderProxyState();
        trackEvent('CraftLabProxy', { on: proxyOn });
      });
    }

    if (jumpBtn) {
      jumpBtn.addEventListener('click', () => {
        const idx = Number(jumpBtn.getAttribute('data-jump-mod') || '1');
        if (typeof selectModule === 'function') selectModule(idx);
        const targetSection = document.getElementById('curriculum');
        const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (targetSection && typeof targetSection.scrollIntoView === 'function') {
          targetSection.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
        }
        const modTab = document.getElementById('mod-tab-' + idx);
        if (modTab) {
          try {
            modTab.focus({ preventScroll: true });
          } catch (_) {}
        }
      });
    }
  }

  // 8. Live Playable Web Audio SFX Sampler (#pack Card 1)
  function initSfxSampler() {
    const pads = Array.from(document.querySelectorAll('[data-sfx-pad]'));
    const badge = document.getElementById('sfx-badge');
    if (!pads.length) return;

    const well = pads[0].closest('.specimen-well');
    let audioCtx = null;
    let resetTimer = null;

    function playTone(kind) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      try {
        if (!audioCtx) audioCtx = new Ctx();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;

        if (kind === 'whoosh') {
          const len = Math.floor(audioCtx.sampleRate * 0.34);
          const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
          const ch = buf.getChannelData(0);
          for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
          const src = audioCtx.createBufferSource();
          src.buffer = buf;
          const filter = audioCtx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.Q.value = 1.6;
          filter.frequency.setValueAtTime(220, now);
          filter.frequency.exponentialRampToValueAtTime(2500, now + 0.16);
          filter.frequency.exponentialRampToValueAtTime(180, now + 0.34);
          const gain = audioCtx.createGain();
          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.28, now + 0.14);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
          src.connect(filter).connect(gain).connect(audioCtx.destination);
          src.start(now);
        } else if (kind === 'riser') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(120, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.44);
          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.14, now + 0.36);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.46);
          osc.connect(gain).connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.48);
        } else if (kind === 'hit') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(145, now);
          osc.frequency.exponentialRampToValueAtTime(38, now + 0.28);
          gain.gain.setValueAtTime(0.45, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.connect(gain).connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.34);
        } else {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(720, now);
          osc.frequency.exponentialRampToValueAtTime(1260, now + 0.08);
          gain.gain.setValueAtTime(0.22, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
          osc.connect(gain).connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.12);
        }
      } catch (_) {}
    }

    pads.forEach((pad) => {
      pad.addEventListener('click', () => {
        const sfx = pad.getAttribute('data-sfx-pad') || 'whoosh';
        playTone(sfx);

        if (resetTimer) clearTimeout(resetTimer);
        pads.forEach((p) => p.classList.toggle('is-active', p === pad));
        if (well) well.classList.add('is-playing');
        if (badge) badge.textContent = 'PLAYING: ' + sfx.toUpperCase();

        resetTimer = setTimeout(() => {
          pads.forEach((p) => p.classList.remove('is-active'));
          if (well) well.classList.remove('is-playing');
          if (badge) badge.textContent = '500+ FILES';
          resetTimer = null;
        }, 550);

        trackEvent('SFXPreview', { sfx });
      });
    });
  }

  initPixels();
  initVideoPlayer();
  const selectModule = initCurriculum();
  initCraftLab(selectModule);
  initSfxSampler();
  initPayments();
  initActionSheet();
  initFaqAndTracking();
  initStickyMobileBar();
  trackEvent('ViewContent');
})();
