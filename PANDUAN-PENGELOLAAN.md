# Panduan Pengelolaan Situs & Media Sosial
## Forum TJSLP Balikpapan

Dokumen ini ditujukan untuk **sekretariat Forum dan pengurus penggantinya**.
Simpan bersama berkas situs. Perbarui setiap kali ada perubahan kustodi akun.

Versi 2.0 — 18 Oktober 2026

**Keputusan yang sudah diambil (10 Oktober 2026):**
- Nama tampilan tunggal: **Forum TJSLP Balikpapan** (sesuai logo; keputusan 18 Oktober 2026 menggantikan keputusan 10 Oktober)
- Untuk tanggal yang bertentangan antara Proposal BSF v6 dan flyer, **flyer yang mengikat**
- Situs tayang gratis di `github.io` lebih dulu; domain `.or.id` menyusul

---

## BAGIAN 0 — Aturan yang tidak boleh dilanggar

1. **Tidak ada aset digital Forum yang boleh berdiri di atas akun pribadi pengurus.**
   Semua akun — surel, hosting, media sosial, pemendek tautan — didaftarkan atas
   `forumcsr25@gmail.com`. Nomor pemulihan dan surel pemulihan juga bukan milik pribadi
   satu orang (lihat Bagian 1).
2. **Jangan menerbitkan data pribadi pihak ketiga.** Berkas seperti
   *Database CP & email perusahaan* dan *Database_Kontak_Perusahaan* berisi nama, nomor
   telepon, dan surel orang per orang. Menautkannya ke situs publik melanggar
   UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Dokumen semacam itu
   diberikan atas permintaan tertulis, bukan dipublikasikan.
3. **Satu nama tampilan saja: `Forum TJSLP Balikpapan`** — sama persis dengan logo resmi
   (diputuskan 18 Oktober 2026). Nama hukumnya *Forum Pelaksana Tanggung Jawab Sosial dan
   Lingkungan Perusahaan (TJSLP) Kota Balikpapan* sesuai Keputusan Wali Kota Nomor
   188.45-175/2025. *Forum CSR Kota Balikpapan* boleh dipakai sebagai sebutan populer.
   Jangan membuat varian lain.
4. **Angka dan tanggal di situs harus sama dengan yang ada di flyer dan surat resmi.**
   Jika berubah, ubah di semua tempat pada hari yang sama.

---

## BAGIAN 1 — Kustodi akun (bagian paling penting)

Situs dan Instagram bisa dibangun ulang dalam sehari. Akun yang hilang aksesnya
tidak bisa dipulihkan. Ini yang membunuh sebagian besar aset digital organisasi
saat pengurus berganti.

### 1.1 Akun induk

| Aset | Pemilik | Catatan |
|---|---|---|
| Surel Forum | `forumcsr25@gmail.com` | Induk dari semua akun lain |
| Google Drive | akun yang sama | Arsip dokumen |
| Akun hosting situs (GitHub) | daftar **dengan** surel di atas | Gratis selamanya |
| Instagram | daftar **dengan** surel di atas | Jangan pakai nomor HP pribadi sebagai satu-satunya pemulihan |
| Pemendek tautan (bit.ly / s.id) | daftar **dengan** surel di atas | Tautan di flyer harus tetap hidup bertahun-tahun |

### 1.2 Yang wajib dilakukan sekarang

1. Aktifkan **verifikasi dua langkah** pada `forumcsr25@gmail.com`.
2. Unduh **kode cadangan** (backup codes) Google. Cetak. Simpan fisik di map
   sekretariat dan satu salinan pada Ketua. Jangan hanya di satu ponsel.
3. Isi **surel pemulihan** dengan surel resmi Forum kedua (misalnya
   `sekretariat.forumcsr@gmail.com`), bukan surel pribadi.
4. Catat siapa saja yang memegang kata sandi. Maksimal tiga orang:
   Ketua, Sekretaris, dan Ketua Biro Pengelolaan Data dan Informasi.
5. Simpan kata sandi di pengelola kata sandi gratis (Bitwarden) dengan satu
   *organization vault* milik Forum — bukan dicatat di buku atau grup WhatsApp.

### 1.3 Saat terjadi pergantian pengurus

- [ ] Ubah kata sandi akun induk
- [ ] Terbitkan ulang kode cadangan, musnahkan cetakan lama
- [ ] Perbarui daftar pemegang akses di dokumen ini
- [ ] Cabut akses kolaborator GitHub dan Instagram yang tidak lagi menjabat
- [ ] Serahkan dokumen ini, dalam keadaan terbarui, ke pengurus baru

---

## BAGIAN 2 — Menayangkan situs (gratis, permanen)

Situs ini adalah berkas HTML statis. Tidak perlu server, tidak perlu basis data,
tidak ada biaya bulanan, tidak ada yang kedaluwarsa.

### 2.1 Langkah penayangan di GitHub Pages

1. Buka `github.com`, daftar akun baru **memakai `forumcsr25@gmail.com`**.

2. **Nama pengguna akun wajib `forumcsrbalikpapan`.** Ini bukan soal selera.
   GitHub hanya menayangkan situs di `https://namaakun.github.io` apabila nama
   repositori **persis sama** dengan nama akun. Kalau akun bernama lain —
   misalnya `forumcsr25-maker` — situs justru tayang di
   `https://forumcsr25-maker.github.io/forumcsrbalikpapan.github.io/`,
   alamat yang tidak layak dicantumkan di kop surat.

   Nama akun bisa diubah kapan saja tanpa kehilangan apa pun:
   foto profil kanan atas → **Settings → Account → Change username**.

   Jika `forumcsrbalikpapan` sudah dipakai orang lain, gunakan
   `forumcsrkotabalikpapan`, lalu samakan nama repositorinya.

3. Buat repositori baru bernama **`forumcsrbalikpapan.github.io`** — sama persis
   dengan nama akun, ditambah `.github.io`. Setel **Public**.

4. Unggah berkas situs.

   - **Repositori yang masih kosong** belum punya tombol *Add file*. Pada kotak
     biru *Quick setup* klik tautan **"uploading an existing file"**.
   - **Repositori yang sudah berisi** memakai tombol **Add file → Upload files**.

   **Seret isi folder, bukan foldernya.** Buka folder `Website Forum CSR`, pilih
   delapan item berikut sekaligus, lalu seret ke halaman GitHub:

   ```
   index.html   tentang.html   program.html
   publikasi.html   keanggotaan.html
   PANDUAN-PENGELOLAAN.md
   assets   (folder)
   img      (folder)
   ```

   Menyeret folder `Website Forum CSR` secara utuh membuat seluruh isinya masuk
   satu tingkat lebih dalam, dan situs tidak akan tayang. Berkas tersembunyi
   `.DS_Store` dan `.nojekyll` boleh diabaikan.

   Isi keterangan singkat, lalu **Commit changes**.

5. Masuk **Settings → Pages**. Pada *Source* pilih **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Simpan.

6. Tunggu 1–3 menit. Situs tayang di
   **`https://forumcsrbalikpapan.github.io`**

   Bila halaman tampil tanpa warna dan tanpa gambar, hampir pasti folder `assets`
   atau `img` tidak ikut terunggah. Periksa daftar berkas di repositori: `index.html`
   harus berada di tingkat paling atas, sejajar dengan folder `assets` dan `img`.

Batas GitHub Pages gratis: 1 GB penyimpanan dan 100 GB lalu lintas per bulan —
jauh di atas kebutuhan Forum.

### 2.2 Nama domain sendiri (opsional, berbayar)

Alamat `forumcsrbalikpapan.github.io` berfungsi penuh, tetapi terbaca sebagai
alamat gratisan untuk lembaga yang bermitra dengan Pemerintah Kota dan Bank Indonesia.

Domain `.or.id` diperuntukkan bagi organisasi dan **mensyaratkan dokumen legalitas
organisasi** — SK kepengurusan dari Wali Kota sudah memenuhi syarat ini. Biayanya
berkisar puluhan hingga ratusan ribu rupiah per tahun tergantung registrar;
periksa harga terkini langsung ke registrar resmi PANDI.

Saran: ini satu-satunya pos biaya yang layak dikeluarkan. Besarnya di bawah biaya
satu kali konsumsi rapat, dan ia menentukan apakah surat resmi Forum bisa
mencantumkan alamat situs tanpa canggung.

Setelah domain dibeli, arahkan ke GitHub Pages lewat **Settings → Pages → Custom domain**.

---

## BAGIAN 3 — Memperbarui isi situs tanpa menulis kode

Semua perubahan dilakukan lewat peramban, tanpa memasang aplikasi apa pun.

### 3.1 Cara umum

1. Buka repositori di `github.com`, masuk dengan akun Forum.
2. Klik berkas yang ingin diubah, misalnya `program.html`.
3. Klik ikon **pensil** (Edit this file).
4. Ubah teksnya. **Jangan menghapus tanda `<` dan `>`** — ubah hanya kata
   di antara tanda tersebut.
5. Gulir ke bawah, isi keterangan singkat perubahan, klik **Commit changes**.
6. Situs memperbarui diri dalam 1–3 menit.

Jika hasilnya kacau, buka tab **History** pada berkas itu dan kembalikan ke versi
sebelumnya. Tidak ada perubahan yang permanen.

### 3.2 Peta berkas

| Berkas | Isinya |
|---|---|
| `index.html` | Beranda: hero, agenda BSF, berita terbaru, data kiprah, penerima CSR Awards, ajakan bergabung |
| `berita.html` | Daftar semua berita (bisa disaring per kategori) |
| `berita-*.html` | Satu berkas per berita |
| `kiprah.html` | Data capaian CSR, keselarasan RPJMD, rekomendasi, linimasa kegiatan |
| `program.html` | Balikpapan Sustainability Festival 2026 dan inisiatif kolaborasi |
| `bergabung.html` | Daftar mitra, laporan CSR/ESG, dasbor |
| `tentang.html` | Profil, dasar hukum, kepengurusan |
| `publikasi.html` | Flyer, infografik, teks siap tayang, dokumen |
| `keanggotaan.html` | Pengalih otomatis ke `bergabung.html` (jangan dihapus) |
| `assets/style.css`, `assets/main.js` | Tampilan dan interaksi |
| `img/` | Foto (sudah diperkecil), logo, flyer |

**Status yang berganti sendiri.** Label seperti "Daftar sampai 23 Okt" dan tombol "Daftar sekarang"
otomatis berubah menjadi "Pendaftaran ditutup" atau hilang setelah tenggatnya lewat. Pita BSF di
bagian atas juga hilang sendiri setelah 28 Oktober 2026.

### 3.2a Menambah berita baru

Cara termudah: minta Claude ("buatkan berita kegiatan X dari dokumen/foto ini untuk situs Forum"),
lalu unggah berkas yang dihasilkan. Cara manual:

1. Salin salah satu berkas `berita-*.html`, beri nama baru, misalnya `berita-pemenang-bsa-2026.html`.
2. Ganti judul, tanggal, isi, dan nama foto. Unggah fotonya ke folder `img/` (lebar maksimal 1600 px).
3. Tambahkan kartu berita baru di `berita.html` (salin satu blok `<a class="kartu" …>…</a>`).
4. Setiap berita wajib mencantumkan sumbernya. Jangan menulis kutipan langsung yang tidak ada
   rekaman atau dokumennya.

### 3.3 Dua hal yang perlu diperhatikan

- **Bilah pengumuman, menu navigasi, dan bagian kaki halaman tersalin di kelima
  berkas HTML.** Mengubahnya berarti mengubah kelima berkas. Cari kalimat yang sama
  di tiap berkas.
- **Menambah logo mitra:** unggah berkas logo ke folder `img/`, lalu pada
  `index.html` cari bagian `<div class="mitra">` dan tambahkan satu baris
  mengikuti pola baris di atasnya.

### 3.4 Setelah 28 Oktober 2026

Rangkaian festival selesai. Yang harus diubah:

- [ ] Ganti bilah pengumuman: dari "pendaftaran dibuka" menjadi pengumuman pemenang
- [ ] Tambahkan daftar pemenang Lomba Tote Bag dan penerima Sustainability Awards
- [ ] Publikasikan ringkasan skor per pilar bagi pemenang — ini sudah dijanjikan
      pada halaman tata kelola penjurian, dan tidak menepatinya merusak kredibilitas
      penghargaan tahun berikutnya
- [ ] Ubah status Pelatihan Tote Bag sesuai pelaksanaan sesungguhnya

---

## BAGIAN 4 — Instagram

### 4.1 Menyiapkan akun

1. Daftar Instagram baru dengan nama pengguna **`forumcsrbalikpapan`**
   (nama ini sudah tercantum di kaki situs; jika sudah dipakai orang lain,
   gunakan `forumcsrbalikpapan` dan perbarui kaki situs di kelima berkas).
2. Daftarkan **dengan surel `forumcsr25@gmail.com`**.
3. Ubah ke **Akun Bisnis** (Settings → Account type → Switch to professional →
   Business → kategori *Non-profit organization*). Ini membuka Meta Business Suite
   dan statistik.
4. Tautkan ke satu **Halaman Facebook** bernama sama, juga atas surel Forum.
   Halaman ini tidak perlu aktif; ia hanya pintu masuk ke penjadwalan gratis.
5. Isi bio:

```
Forum CSR Kota Balikpapan
Wadah koordinasi TJSLP/CSR dunia usaha bersama Pemkot Balikpapan
Masa bakti 2025-2030
forumcsrbalikpapan.github.io
```

### 4.2 Menjadwalkan unggahan — gratis, tanpa alat tambahan

Buka **business.facebook.com** → *Planner*. Di sana unggahan Instagram bisa
dijadwalkan berminggu-minggu di muka, gratis, dari Meta sendiri. Tidak perlu
Buffer, Later, atau layanan berbayar lainnya.

Cara kerja yang disarankan: **satu sesi 45 menit setiap awal bulan**, satu orang,
menjadwalkan 8–10 unggahan sekaligus. Setelah itu akun berjalan sendiri sebulan penuh.

### 4.3 Enam jenis unggahan yang berulang

Akun media sosial organisasi mati karena kehabisan ide, bukan karena kekurangan alat.
Enam pola ini bisa diputar terus:

1. **Pengumuman kegiatan** — flyer + caption, seperti Lomba Tote Bag
2. **Hitung mundur tenggat** — "3 hari lagi pendaftaran ditutup"
3. **Sorot program mitra** — satu perusahaan anggota, satu program, hasil terukurnya
4. **Dokumentasi kegiatan** — foto rapat koordinasi, pelatihan, penyerahan bantuan
5. **Edukasi singkat** — apa itu ESG, isi Perda TJSLP, cara menghitung dampak program
6. **Apresiasi** — ucapan terima kasih ke mitra, perangkat daerah, relawan

Arsip foto kegiatan Forum sudah tersedia di folder laptop dan Google Drive —
bahan untuk bulan-bulan pertama sudah ada.

### 4.4 Aturan konten

- Setiap unggahan yang menyebut tanggal atau angka harus cocok dengan situs
- Jangan mengunggah foto wajah peserta tanpa persetujuan, terutama anak-anak
- Jangan mengunggah tangkapan layar dokumen yang memuat nomor telepon atau surel orang
- Logo mitra hanya dipakai dari folder logo resmi yang mereka kirimkan

---

## BAGIAN 5 — Soal "agen AI": apa yang nyata dan apa yang tidak

Permintaan untuk membuat agen AI yang menjalankan situs dan Instagram secara mandiri
perlu diluruskan, karena jika dipaksakan ia justru menjadi beban warisan, bukan aset.

### 5.1 Tiga kendala yang tidak bisa dihindari

**Langganan Claude Pro tidak mencakup akses API.** Langganan itu untuk Anda memakai
Claude lewat aplikasi. Agen yang berjalan sendiri di server memerlukan kunci API yang
ditagih terpisah berdasarkan pemakaian. Tidak ada jalan membuat agen mandiri
"gratis dengan langganan Pro".

**Tugas terjadwal di dalam Claude berjalan atas akun pribadi Anda.** Begitu langganan
berakhir atau kepengurusan berganti, ia berhenti tanpa pemberitahuan dan tanpa ada
yang tahu cara menghidupkannya kembali. Ini persis kebalikan dari warisan yang
bisa dialihkan.

**Unggah otomatis ke Instagram tidak sederhana.** Diperlukan akun bisnis, Halaman
Facebook tertaut, aplikasi developer Meta, dan peninjauan izin oleh Meta. Aplikasi
developer itu sendiri terdaftar atas nama satu orang — satu lagi ketergantungan pribadi
yang harus dipelihara.

### 5.2 Yang sebenarnya Anda butuhkan

Bukan agen otonom, melainkan **prosedur tetap berbantuan AI**:

> Setiap awal bulan, satu pengurus membuka Claude, menempelkan ringkasan kegiatan
> bulan itu, dan meminta sepuluh caption beserta jadwalnya. Hasilnya dijadwalkan
> di Meta Business Suite dalam satu sesi. Selesai.

Hasil akhirnya sama dengan yang Anda bayangkan dari sebuah agen. Bedanya: tidak ada
biaya API, tidak ada yang rusak diam-diam, dan siapa pun pengurus berikutnya bisa
mengerjakannya dengan membaca satu halaman panduan.

### 5.3 Kalau tetap ingin otomatisasi penuh

Tunda sampai dua syarat terpenuhi: Forum memiliki anggaran rutin untuk biaya API,
dan ada pengurus yang benar-benar menguasai pemeliharaannya. Sebelum dua hal itu ada,
otomatisasi penuh hanya memindahkan titik kegagalan dari manusia ke sistem yang
tak seorang pun bisa perbaiki.

---

## BAGIAN 6 — Daftar periksa serah terima

Dicetak dan ditandatangani saat pergantian pengurus.

**Akses**
- [ ] Kata sandi `forumcsr25@gmail.com` diserahkan dan diubah
- [ ] Kode cadangan dicetak ulang dan diserahkan
- [ ] Akses GitHub dialihkan, kolaborator lama dicabut
- [ ] Akses Instagram dan Halaman Facebook dialihkan
- [ ] Akun pemendek tautan diserahkan

**Isi**
- [ ] Situs menampilkan kepengurusan yang berlaku
- [ ] Tidak ada tenggat yang sudah lewat masih tampil sebagai "dibuka"
- [ ] Seluruh tautan pendaftaran masih hidup
- [ ] Dokumen ini diperbarui tanggalnya

**Arsip**
- [ ] Google Drive dirapikan, dokumen internal tidak berstatus "siapa saja dengan link"
- [ ] Salinan berkas situs tersimpan di Drive sebagai cadangan
