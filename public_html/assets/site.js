// Ceļu Būvnieks: cookie notice, map consent, phone menu.
(function () {
  var NAME = 'cookie_notice';
  var mapBox = document.querySelector('[data-map-src]');

  function choice() {
    var parts = document.cookie.split('; ');
    if (parts.indexOf(NAME + '=1') !== -1) return '1';
    if (parts.indexOf(NAME + '=0') !== -1) return '0';
    return null;
  }

  function save(value) {
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = NAME + '=' + value + '; Max-Age=31536000; Path=/; SameSite=Lax' + secure;
  }

  function loadMap() {
    if (!mapBox || mapBox.querySelector('iframe')) return;
    var frame = document.createElement('iframe');
    frame.title = 'SIA “Ceļu Būvnieks” atrašanās vieta kartē';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    frame.src = mapBox.getAttribute('data-map-src');
    mapBox.textContent = '';
    mapBox.appendChild(frame);
  }

  if (mapBox) {
    var loadButton = mapBox.querySelector('[data-map-load]');
    if (loadButton) loadButton.addEventListener('click', loadMap);
  }

  // Scroll reveal: blocks below the first screen fade and slide up when scrolled to, one after another.
  // Blocks already on screen at load are left alone, so they don't move during the page fade.
  if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var io = new IntersectionObserver(function (list) {
      var n = 0;
      list.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.style.setProperty('--d', Math.min(n++, 6) * 90 + 'ms');
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.chip, .tile, .card, .proj, .h2').forEach(function (el) {
      if (el.classList.contains('rv') || el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add('sr');
      io.observe(el);
    });
  }

  // "Darbības jomas": calm scroll so the shortcut icons sit just under the header.
  // From other pages: open the homepage at the top, then scroll (flag in sessionStorage).
  var quick = document.querySelector('.quick'), jomas = document.getElementById('jomas');
  function goJomas(now) {
    var top = document.querySelector('.top');
    var head = top && getComputedStyle(top).position === 'sticky' ? top.offsetHeight : 0;
    var to = (quick || jomas).getBoundingClientRect().top + scrollY - head - (quick ? 12 - parseFloat(getComputedStyle(quick).paddingTop) : 0);
    var from = scrollY, dist = to - from, t0 = null, dur = Math.min(1288, 552 + Math.abs(dist) * 0.46);
    if (now || matchMedia('(prefers-reduced-motion: reduce)').matches) { scrollTo({ top: to, behavior: 'instant' }); return; }
    function ease(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
    function step(now) {
      if (t0 === null) t0 = now;
      var k = Math.min(1, (now - t0) / dur);
      scrollTo({ top: from + dist * ease(k), behavior: 'instant' });
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.addEventListener('click', function (e) {
    var l = e.target.closest('a[href$="#jomas"]');
    if (!l || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (jomas) { goJomas(); history.replaceState(null, '', '#jomas'); return; }
    try { sessionStorage.setItem('goJomas', '1'); } catch (x) {}
    var url = l.href.split('#')[0], navCur = l.matches('nav.desk .navl') && document.querySelector('nav.desk .navl[aria-current]');
    if (navCur && navCur !== l && matchMedia('(min-width: 901px)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var a = navCur.getBoundingClientRect(), b = l.getBoundingClientRect();
      navCur.style.setProperty('--nu-x', (b.left - a.left) + 'px');
      navCur.style.setProperty('--nu-s', b.width / a.width);
      setTimeout(function () { location.href = url; }, 260);
    } else location.href = url;
  });
  if (jomas) {
    var flag = null;
    try { flag = sessionStorage.getItem('goJomas'); sessionStorage.removeItem('goJomas'); } catch (x) {}
    if (flag) setTimeout(goJomas, 350);
    else if (location.hash === '#jomas') addEventListener('load', function () { goJomas(true); });
  }

  // Desktop nav: underline slides from the current link to the clicked one, then the page changes
  var nav = document.querySelector('nav.desk');
  var cur = nav && nav.querySelector('.navl[aria-current]');
  if (cur) {
    var wide = matchMedia('(min-width: 901px)'), still = matchMedia('(prefers-reduced-motion: reduce)');
    addEventListener('pageshow', function (e) {
      if (e.persisted) { cur.style.removeProperty('--nu-x'); cur.style.removeProperty('--nu-s'); }
    });
    nav.querySelectorAll('.navl').forEach(function (l) {
      l.addEventListener('click', function (e) {
        if (l === cur || /#jomas$/.test(l.getAttribute('href')) || !wide.matches || still.matches || e.defaultPrevented ||
            e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        var a = cur.getBoundingClientRect(), b = l.getBoundingClientRect();
        cur.style.setProperty('--nu-x', (b.left - a.left) + 'px');
        cur.style.setProperty('--nu-s', b.width / a.width);
        setTimeout(function () { location.href = l.href; }, 260);
      });
    });
  }

  // Phone menu closes after choosing a section
  var menu = document.querySelector('.mnav');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.open = false;
    });
  }

  // Tehnika page: tap a machine to show only its group, tap again to show all
  var tf = document.querySelector("[data-tfilter]");
  if (tf) {
    tf.addEventListener("click", function (e) {
      var b = e.target.closest("[data-f]");
      if (!b) return;
      var on = b.getAttribute("aria-pressed") !== "true";
      tf.querySelectorAll("[data-f]").forEach(function (x) { x.setAttribute("aria-pressed", String(on && x === b)); });
      document.querySelectorAll("[data-g]").forEach(function (g) { g.hidden = on && g.getAttribute("data-g") !== b.getAttribute("data-f"); });
    });
  }

  // Cookie notice
  var reset = document.querySelector('[data-cookie-reset]');
  if (reset) {
    reset.addEventListener('click', function () {
      document.cookie = NAME + '=; Max-Age=0; Path=/; SameSite=Lax';
      location.reload();
    });
  }

  var saved = choice();
  if (saved === '1') loadMap();
  if (saved !== null) return;

  var bar = document.getElementById('cookie');
  if (!bar) return;
  bar.hidden = false;
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-choice]');
    if (!b) return;
    save(b.getAttribute('data-choice'));
    if (b.getAttribute('data-choice') === '1') loadMap();
    bar.hidden = true;
  });
})();
