# e-Absen SLB AN — PWA NO BLUE FINAL

Versi ini menghapus iframe PWA yang menyebabkan tampilan desktop/landscape dan panel biru
melebar pada HP.

Perilaku:
- Tidak meminta URL server.
- Tidak ada GANTI SERVER.
- Tidak ada MUAT ULANG.
- Tidak memakai iframe.
- Langsung mengarahkan ke Web App Apps Script yang sudah PASS.
- Manifest portrait-primary.
- Kamera/GPS tetap ditangani oleh Web App Apps Script.
- Backend Apps Script tidak diubah.

Ganti file berikut di GitHub Pages:
index.html
manifest.json
service-worker.js
icon-192.svg
icon-512.svg
