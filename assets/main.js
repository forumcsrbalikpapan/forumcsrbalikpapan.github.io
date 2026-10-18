/* Forum TJSLP Balikpapan — interaksi situs. Situs tetap utuh tanpa skrip ini. */
(function () {
  // Menu ponsel
  var t = document.getElementById('menuTombol'), n = document.getElementById('navUtama');
  if (t && n) t.addEventListener('click', function () {
    var b = n.classList.toggle('buka'); t.setAttribute('aria-expanded', b ? 'true' : 'false');
  });

  // Hitung mundur: <div class="hitung" data-sampai="2026-10-28T07:30:00+08:00">
  document.querySelectorAll('[data-sampai]').forEach(function (el) {
    var tgt = new Date(el.getAttribute('data-sampai')).getTime();
    function tick() {
      var d = Math.max(0, tgt - Date.now());
      var h = Math.floor(d / 864e5), j = Math.floor(d % 864e5 / 36e5), m = Math.floor(d % 36e5 / 6e4);
      var f = { hari: h, jam: j, menit: m };
      Object.keys(f).forEach(function (k) { var x = el.querySelector('[data-k="' + k + '"]'); if (x) x.textContent = String(f[k]).padStart(2, '0'); });
      if (d === 0) { var s = el.getAttribute('data-selesai'); if (s) el.innerHTML = '<p class="kecil">' + s + '</p>'; return; }
    }
    tick(); setInterval(tick, 30000);
  });

  // Status yang berganti sendiri setelah tenggat:
  // <span class="chip buka" data-tutup="2026-10-23T23:59:00+08:00" data-label-tutup="Pendaftaran ditutup">…</span>
  document.querySelectorAll('[data-tutup]').forEach(function (el) {
    if (Date.now() > new Date(el.getAttribute('data-tutup')).getTime()) {
      el.textContent = el.getAttribute('data-label-tutup') || 'Ditutup';
      el.classList.remove('buka', 'emas'); el.classList.add('tutup');
    }
  });
  document.querySelectorAll('[data-sembunyi-setelah]').forEach(function (el) {
    if (Date.now() > new Date(el.getAttribute('data-sembunyi-setelah')).getTime()) el.hidden = true;
  });

  // Penampil foto
  var dlg = document.getElementById('lightbox');
  if (dlg) {
    var im = dlg.querySelector('img'), cap = dlg.querySelector('p');
    document.querySelectorAll('.galeri button').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = b.querySelector('img'); im.src = b.getAttribute('data-besar') || i.src; im.alt = i.alt; cap.textContent = i.alt;
        if (dlg.showModal) dlg.showModal();
      });
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('tutup')) dlg.close(); });
  }

  // Saring berita
  var fl = document.querySelector('.filter');
  if (fl) fl.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    fl.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    var k = b.getAttribute('data-kat');
    document.querySelectorAll('[data-kat-item]').forEach(function (c) {
      c.hidden = !(k === 'semua' || c.getAttribute('data-kat-item') === k);
    });
  });
})();
