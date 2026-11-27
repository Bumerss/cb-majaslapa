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
