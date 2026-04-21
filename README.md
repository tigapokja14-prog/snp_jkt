# 📊 Dashboard SNP — Standar Nasional Pendidikan

Dashboard modern untuk memvisualisasikan data Standar Nasional Pendidikan (SNP) sekolah dasar di DKI Jakarta, dibangun dengan **Astro** + **Chart.js** + **Google Sheets API**.

![Dashboard Preview](https://placeholder.com/dashboard-preview)

---

## 🚀 Fitur

| Halaman | Deskripsi |
|---------|-----------|
| **Overview** | KPI utama, radar 8 standar, distribusi akreditasi & status AN |
| **Radar SNP** | Radar interaktif: perbandingan wilayah & pencarian sekolah spesifik |
| **Data Sekolah** | Tabel lengkap dengan search, filter, sort, dan pagination |
| **Per Wilayah** | Analisis mendalam 5 wilayah administratif DKI Jakarta |
| **Ranking** | Top 10 & Bottom 10 sekolah berdasarkan nilai SNP |

---

## ⚡ Quick Start

```bash
# Clone dan install
npm install

# Dev server
npm run dev

# Build production
npm run build
```

---

## 🔗 Koneksi Google Sheets

### Langkah 1: Persiapkan Google Sheets

1. Buka Google Sheets Anda yang berisi data SNP
2. Klik **File → Share → Anyone with the link → Viewer**
3. Copy **Spreadsheet ID** dari URL:
   ```
   https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
   ```

### Langkah 2: Buat Google Sheets API Key

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru (atau pilih yang sudah ada)
3. Aktifkan **Google Sheets API**: APIs & Services → Library → cari "Google Sheets API"
4. Buat API Key: APIs & Services → Credentials → Create Credentials → API Key
5. (Opsional) Batasi API key ke Google Sheets API saja untuk keamanan

### Langkah 3: Konfigurasi Dashboard

**Edit `src/lib/googleSheets.ts`:**

```typescript
export const SHEETS_CONFIG = {
  SPREADSHEET_ID: 'your_spreadsheet_id_here',  // ← Ganti ini
  SHEET_NAME: 'Sheet1',
  RANGE: 'Sheet1!A1:BG401',
  API_KEY: import.meta.env.PUBLIC_GOOGLE_SHEETS_API_KEY,
};
```

**Buat file `.env`:**

```bash
cp .env.example .env
```

Isi `PUBLIC_GOOGLE_SHEETS_API_KEY` dengan API Key Anda.

---

## 📋 Struktur Data Google Sheets

Sheet harus memiliki kolom dengan urutan berikut (baris 1 = header):

| Kolom | Field | Keterangan |
|-------|-------|-----------|
| A | tahun | Tahun data (contoh: 2025) |
| B | npsn | NPSN sekolah |
| C | nama sekolah | Nama lengkap sekolah |
| D | jenjang | SD/SMP/SMA/dll |
| E | status sekolah | Negeri/Swasta |
| F | kabupaten | Kota/Kabupaten |
| G | provinsi | Nama provinsi |
| H | akreditasi | A/B/C/Tidak diisi |
| I | siswa | Jumlah siswa |
| J | kecamatan | Nama kecamatan |
| K | standar_isi | Nilai 0-100 |
| L | standar_kelulusan | Nilai 0-100 |
| M | standar_pengelolaan | Nilai 0-100 |
| N | standar_penilaian | Nilai 0-100 |
| O | standar_proses | Nilai 0-100 |
| P | standar_sarpras | Nilai 0-100 |
| Q | standar_ptk | Nilai 0-100 |
| R | standar_biaya | Nilai 0-100 |
| S | snp | Nilai SNP rata-rata |
| T | Mengikuti AN | Ya/Tidak |
| Z | status_AN | Ikut AN/Tidak Mengikuti AN |
| AA | status_login | Sudah Akses/Belum Akses |
| AB | status_unduh | Sudah Unduh/Belum Unduh |
| AC | Status_alokasi | Sudah Sesuai/Belum Sesuai |
| AD–AH | skl01–skl06 | Sub-indikator SKL |
| AI–AN | spr01–spr06 | Sub-indikator Proses |
| AO–AQ | si01–si03 | Sub-indikator Isi |
| AR–AS | spn01–spn02 | Sub-indikator Penilaian |
| AT–AU | spl01–spl02 | Sub-indikator Pengelolaan |
| AV–AZ | ssp01–ssp05 | Sub-indikator Sarpras |
| BA–BD | sptk01–sptk04 | Sub-indikator PTK |
| BE | sb01 | Sub-indikator Biaya |

---

## 🎨 Tech Stack

- **[Astro](https://astro.build/)** — Static site generator, zero JS by default
- **[Chart.js](https://www.chartjs.org/)** — Radar chart, doughnut, bar chart
- **[Google Sheets API v4](https://developers.google.com/sheets/api)** — Data source
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility CSS (minimal usage)
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono (numbers)

---

## 📁 Struktur Project

```
snp-dashboard/
├── src/
│   ├── layouts/
│   │   └── DashboardLayout.astro    # Layout utama + sidebar
│   ├── lib/
│   │   └── googleSheets.ts          # API & data helpers
│   └── pages/
│       ├── index.astro              # Overview / Home
│       ├── radar.astro              # Radar SNP interaktif
│       ├── sekolah.astro            # Data sekolah + filter
│       ├── kabupaten.astro          # Analisis per wilayah
│       └── ranking.astro            # Top/bottom ranking
├── public/
├── .env.example                     # Template environment variables
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🔧 Customization

### Ganti Wilayah/Provinsi
Edit filter di `src/lib/googleSheets.ts` → fungsi `avgByKabupaten` dan `rankingSekolah`.

### Tambah Halaman Baru
Buat file `.astro` baru di `src/pages/` dan tambahkan entry di array `menuItems` di `DashboardLayout.astro`.

### Ganti Sumber Data
Modifikasi fungsi `getSNPData()` di `src/lib/googleSheets.ts` — bisa diubah ke REST API, database, atau CSV.

---

## 📝 License

MIT — Bebas digunakan dan dimodifikasi.
