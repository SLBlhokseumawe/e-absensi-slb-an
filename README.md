# e-Absen SLB AN — PWA Package

Paket ini menyiapkan lapisan PWA untuk aplikasi e-Absen yang saat ini berjalan sebagai
Google Apps Script Web App.

## File
- index_PWA.html — index aplikasi, mempertahankan fungsi existing dan menambahkan metadata PWA.
- manifest.json — manifest installable.
- icon-192.svg
- icon-512.svg
- service-worker-template.js — template service worker untuk hosting PWA yang benar-benar same-origin.
- README.md

## Catatan penting untuk Google Apps Script
Google Apps Script HtmlService tidak secara langsung berfungsi sebagai hosting aset PWA
same-origin (khususnya service worker) seperti static hosting biasa. Karena itu paket ini
TIDAK memalsukan offline-PWA pada deployment Apps Script. Index tetap fokus pada fungsi yang
sudah PASS: login, GPS, selfie, Check-In/Check-Out, dashboard, admin, dan pengaturan.

Manifest dan metadata sudah disiapkan. Browser yang mendukung install prompt dapat menampilkan
opsi install berdasarkan kebijakan browser/hosting.

## Untuk PWA penuh (offline shell + service worker)
Host file `manifest.json`, `service-worker.js`, dan aset statis di hosting HTTPS
same-origin, misalnya Firebase Hosting, GitHub Pages, atau Cloudflare Pages, lalu
`index_PWA.html` dapat dijadikan shell yang memanggil Web App Apps Script sebagai backend.

## Jangan ubah backend Apps Script
PWA ini tidak mengubah endpoint backend, Spreadsheet, Drive, atau struktur database.
