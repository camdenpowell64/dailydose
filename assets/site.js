// The try-it widget on the home page: tap the check, like the real widget. No third-party code.
document.querySelectorAll('[data-dose]').forEach(function (b) {
  var w = b.closest('.widget');
  var count = w.querySelector('[data-count]');
  var status = w.querySelector('[data-status]');
  var today = w.querySelector('.wd.today .wp');
  b.addEventListener('click', function () {
    var on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    count.textContent = (on ? 22 : 23) + ' left';
    status.textContent = on ? 'Taken just now' : 'Not taken yet';
    today.className = 'wp ' + (on ? 'on' : 'off');
  });
});
