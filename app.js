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
      tag: '2–3 مشاريع/شهر',
      title: 'تطبيقات ومشاريع كاملة',
      summary: 'تشوفني أنا شخصياً نخدم مشاريع كاملة من الأول حتى اللخر: نجيبو ستايلات مختلفين ونطبقوهم قدامك، ونزيدلك 2 حتى 3 مشاريع جديدة كل شهر.',
      points: [
        'تفهم وقتاش تستعمل كل تقنية من غير عشوائية',
        'مشاريع بستيلات متنوعة تقدر دير كيفها للي كليون',
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
      waText: 'سلام خيرو، خلّصت دورة CapCut PC بـ BaridiMob (4,900 دج) وهاهو وصل الدفع:'
    },
    redotpay: {
      label: 'RedotPay ID',
      account: '1743900815',
      now: '$18',
      old: '$20',
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

  // 1. Custom VSL Player (with Chapters, 1x-1.5x Speed, Keyboard + Pointer Scrub)
  function initVideoPlayer() {
    const video = document.getElementById('vsl-video');
    const overlay = document.getElementById('vsl-overlay');
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
    let dragging = false;

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
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
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
    video.addEventListener('play', () => syncPlayIcons(true));
    video.addEventListener('pause', () => syncPlayIcons(false));
    video.addEventListener('ended', () => syncPlayIcons(false));
    video.addEventListener('timeupdate', () => syncScrubUi(video.currentTime, video.duration));

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
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
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
          if (typeof tab.scrollIntoView === 'function' && window.innerWidth <= 860) {
            tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
  }

  // 3. Synchronized Dual Payment Switcher & 1-Tap Copy (Inline Deck + Sheet)
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
    let copyTimer = null;

    function setMethod(method, focusGroup = null) {
      const cfg = PAYMENT_METHODS[method];
      if (!cfg) return;
      currentMethod = method;
      if (copyTimer) {
        clearTimeout(copyTimer);
        copyTimer = null;
      }
      setCopiedVisual(false);
      statusEls.forEach((el) => { el.textContent = ''; });

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

      labelEls.forEach((el) => { el.textContent = cfg.label; });
      nowEls.forEach((el) => { el.textContent = cfg.now; });
      oldEls.forEach((el) => { el.textContent = cfg.old; });
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

    function fallbackCopy(val, cb) {
      const previousActive = document.activeElement;
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
      if (previousActive && typeof previousActive.focus === 'function') {
        previousActive.focus();
      }
      cb();
    }

    function triggerCopy() {
      const cfg = PAYMENT_METHODS[currentMethod];
      const text = cfg.account;
      const done = () => {
        if (copyTimer) clearTimeout(copyTimer);
        setCopiedVisual(true);
        statusEls.forEach((el) => { el.textContent = 'تم نسخ الرقم: ' + text; });
        trackEvent('CopyPaymentID', { method: currentMethod });
        copyTimer = setTimeout(() => {
          setCopiedVisual(false);
          statusEls.forEach((el) => { el.textContent = ''; });
          copyTimer = null;
        }, 1800);
      };

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      } else {
        fallbackCopy(text, done);
      }
    }

    copyTriggers.forEach((el) => el.addEventListener('click', triggerCopy));
    setMethod('baridimob');
  }

  // 4. Instant Slide-Up Quick-Pay & Human-Chat Sheet (with Focus Management & inert background)
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
      if (e.key === 'Escape' && !sheet.hidden) {
        e.preventDefault();
        closeSheet();
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
        trackEvent(el.getAttribute('data-track'));
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

  initVideoPlayer();
  initCurriculum();
  initPayments();
  initActionSheet();
  initFaqAndTracking();
  initStickyMobileBar();
  trackEvent('ViewContent');
})();
