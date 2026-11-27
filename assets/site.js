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
        if (l === cur || !wide.matches || still.matches || e.defaultPrevented ||
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
