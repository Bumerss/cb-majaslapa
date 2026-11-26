document.addEventListener('DOMContentLoaded', function () {
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
    frame.style.border = '0';
    frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    frame.setAttribute('allowfullscreen', '');
    frame.src = mapBox.getAttribute('data-map-src');
    mapBox.innerHTML = '';
    mapBox.appendChild(frame);
  }

  if (mapBox) {
    var loadButton = mapBox.querySelector('[data-map-load]');
    if (loadButton) loadButton.addEventListener('click', loadMap);
  }

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

  var data = document.querySelector('input[name=cookieData]');
  if (!data) return;

  var bar = document.createElement('div');
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Sīkdatņu paziņojums');
  bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2000;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;padding:14px 16px;font-size:15px;box-shadow:0 -2px 8px rgba(0,0,0,.15);color:' + data.getAttribute('data-cookie-colorText') + ';background:' + data.getAttribute('data-cookie-colorBg');

  var text = document.createElement('span');
  text.innerHTML = data.getAttribute('data-cookie-text');
  var link = text.querySelector('a');
  if (link) link.style.cssText = 'color:inherit;text-decoration:underline';

  function addButton(label, value) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.className = 'btn btn-primary';
    button.style.margin = '0';
    button.addEventListener('click', function () {
      save(value);
      if (value === '1') loadMap();
      bar.parentNode.removeChild(bar);
    });
    return button;
  }

  bar.appendChild(text);
  bar.appendChild(addButton(data.getAttribute('data-cookie-textButton'), '1'));
  bar.appendChild(addButton('Noraidīt', '0'));
  document.body.appendChild(bar);
});
