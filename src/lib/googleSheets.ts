// src/lib/googleSheets.ts
// Google Sheets API integration untuk data SNP

export interface SekolahData {
  tahun: number;
  npsn: string;
  namaSekolah: string;
  jenjang: string;
  statusSekolah: string;
  kabupaten: string;
  provinsi: string;
  akreditasi: string;
  siswa: number;
  kecamatan: string;
  standarIsi: number;
  standarKelulusan: number;
  standarPengelolaan: number;
  standarPenilaian: number;
  standarProses: number;
  standarSarpras: number;
  standarPtk: number;
  standarBiaya: number;
  snp: number;
  mengikutiAN: string;
  statusAN: string;
  statusLogin: string;
  statusUnduh: string;
  statusAlokasi: string;
  // Sub-indikator SKL
  skl01: number; skl02: number; skl03: number;
  // Sub-indikator SPR (Proses)
  spr01: number; spr02: number; spr03: number; spr04: number; spr05: number; spr06: number;
  // Sub-indikator SI (Isi)
  si01: number; si02: number; si03: number;
  // Sub-indikator SPN (Penilaian)
  spn01: number; spn02: number;
  // Sub-indikator SPL (Pengelolaan)
  spl01: number; spl02: number;
  // Sub-indikator SSP (Sarpras)
  ssp01: number; ssp02: number; ssp03: number; ssp04: number; ssp05: number;
  // Sub-indikator SPTK (PTK)
  sptk01: number; sptk02: number; sptk03: number; sptk04: number;
  // Sub-indikator SB (Biaya)
  sb01: number;
}

/**
 * Konfigurasi Google Sheets
 * Ganti SPREADSHEET_ID dan SHEET_NAME sesuai dengan Google Sheet Anda
 * 
 * Untuk menggunakan Google Sheets API:
 * 1. Buat project di Google Cloud Console
 * 2. Aktifkan Google Sheets API
 * 3. Buat API Key
 * 4. Set spreadsheet ke "Anyone with link can view"
 * 5. Isi SPREADSHEET_ID dan API_KEY di bawah
 */
export const SHEETS_CONFIG = {
  // Ganti dengan Spreadsheet ID dari URL Google Sheets Anda
  // Contoh: https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
  SPREADSHEET_ID: '163_8O_ES0EaY7fo2fuRy9fChT60NoWvFprZMafVlnhU',

  // Nama sheet/tab (default: Sheet1)
  SHEET_NAME: 'Sheet1',

  // Range data (sesuaikan dengan data Anda)
  RANGE: 'Sheet1!A1:BG10000',

  // Google Sheets API Key (gunakan variabel environment untuk keamanan)
  API_KEY: import.meta.env.PUBLIC_GOOGLE_SHEETS_API_KEY || 'YOUR_API_KEY_HERE',
};

/**
 * Fetch data dari Google Sheets menggunakan Sheets API v4
 */
export async function fetchFromGoogleSheets(): Promise<SekolahData[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.SPREADSHEET_ID}/values/${encodeURIComponent(SHEETS_CONFIG.RANGE)}?key=${SHEETS_CONFIG.API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const rows: string[][] = data.values;

  if (!rows || rows.length < 2) {
    return [];
  }

  // Skip header row (baris pertama)
  return rows.slice(1).map(row => parseRow(row));
}

/**
 * Parse baris data dari Google Sheets ke SekolahData
 * Urutan kolom sesuai struktur file: tahun, npsn, nama sekolah, jenjang, status sekolah,
 * kabupaten, provinsi, akreditasi, siswa, kecamatan, standar_isi, standar_kelulusan,
 * standar_pengelolaan, standar_penilaian, standar_proses, standar_sarpras, standar_ptk,
 * standar_biaya, snp, Mengikuti AN, Login, Unduh, Alokasi Sesuai..., Mengalami Perbaikan...,
 * Menerapkan PMP, status_AN, status_login, status_unduh, Status_alokasi,
 * skl01-skl06, spr01-spr06, si01-si03, spn01-spn02, spl01-spl02, ssp01-ssp05, sptk01-sptk04, sb01
 */
function parseRow(row: string[]): SekolahData {
  const num = (v: string | undefined) => parseFloat(v || '0') || 0;
  const str = (v: string | undefined) => v?.trim() || '';

  return {
    tahun: num(row[0]),
    npsn: str(row[1]),
    namaSekolah: str(row[2]),
    jenjang: str(row[3]),
    statusSekolah: str(row[4]),
    kabupaten: str(row[5]),
    provinsi: str(row[6]),
    akreditasi: str(row[7]),
    siswa: num(row[8]),
    kecamatan: str(row[9]),
    standarIsi: num(row[10]),
    standarKelulusan: num(row[11]),
    standarPengelolaan: num(row[12]),
    standarPenilaian: num(row[13]),
    standarProses: num(row[14]),
    standarSarpras: num(row[15]),
    standarPtk: num(row[16]),
    standarBiaya: num(row[17]),
    snp: num(row[18]),
    mengikutiAN: str(row[19]),
    statusAN: str(row[25]),
    statusLogin: str(row[26]),
    statusUnduh: str(row[27]),
    statusAlokasi: str(row[28]),
    skl01: num(row[29]), skl02: num(row[30]), skl03: num(row[31]),
    spr01: num(row[35]), spr02: num(row[36]), spr03: num(row[37]),
    spr04: num(row[38]), spr05: num(row[39]), spr06: num(row[40]),
    si01: num(row[41]), si02: num(row[42]), si03: num(row[43]),
    spn01: num(row[44]), spn02: num(row[45]),
    spl01: num(row[46]), spl02: num(row[47]),
    ssp01: num(row[48]), ssp02: num(row[49]), ssp03: num(row[50]),
    ssp04: num(row[51]), ssp05: num(row[52]),
    sptk01: num(row[53]), sptk02: num(row[54]), sptk03: num(row[55]), sptk04: num(row[56]),
    sb01: num(row[57]),
  };
}

/**
 * Data dummy untuk development/preview (struktur sama dengan data asli)
 * Gunakan ini saat API belum dikonfigurasi
 */

/**

export const DUMMY_DATA: SekolahData[] = [
  {
    tahun: 2025, npsn: '20104974', namaSekolah: 'SD ADVENT ANGGREK',
    jenjang: 'SD', statusSekolah: 'Swasta', kabupaten: 'Kota Adm. Jakarta Utara',
    provinsi: 'Prov. D.K.I. Jakarta', akreditasi: 'B', siswa: 100, kecamatan: 'Kec. Koja',
    standarIsi: 53.71, standarKelulusan: 66.68, standarPengelolaan: 71.47,
    standarPenilaian: 67.72, standarProses: 65.78, standarSarpras: 95.00,
    standarPtk: 54.29, standarBiaya: 52.17, snp: 65.85,
    mengikutiAN: 'Ya', statusAN: 'Ikut AN', statusLogin: 'Sudah Akses',
    statusUnduh: 'Sudah Unduh', statusAlokasi: 'Belum Sesuai',
    skl01: 79.56, skl02: 65.08, skl03: 55.4,
    spr01: 63.79, spr02: 60.73, spr03: 68.86, spr04: 69.17, spr05: 63.09, spr06: 69.02,
    si01: 64.41, si02: 46.32, si03: 50.40,
    spn01: 65.37, spn02: 70.07,
    spl01: 68.93, spl02: 74.01,
    ssp01: 100, ssp02: 100, ssp03: 100, ssp04: 100, ssp05: 75,
    sptk01: 59.70, sptk02: 57.44, sptk03: 16.67, sptk04: 83.33,
    sb01: 52.17,
  },
  {
    tahun: 2025, npsn: '20109442', namaSekolah: 'SD ADVENT MENTENG',
    jenjang: 'SD', statusSekolah: 'Swasta', kabupaten: 'Kota Adm. Jakarta Pusat',
    provinsi: 'Prov. D.K.I. Jakarta', akreditasi: 'A', siswa: 59, kecamatan: 'Kec. Menteng',
    standarIsi: 52.38, standarKelulusan: 69.38, standarPengelolaan: 72.67,
    standarPenilaian: 67.76, standarProses: 67.24, standarSarpras: 95.00,
    standarPtk: 67.96, standarBiaya: 47.04, snp: 67.43,
    mengikutiAN: 'Ya', statusAN: 'Ikut AN', statusLogin: 'Sudah Akses',
    statusUnduh: 'Sudah Unduh', statusAlokasi: 'Belum Sesuai',
    skl01: 83.89, skl02: 66.15, skl03: 58.1,
    spr01: 62.58, spr02: 62.10, spr03: 72.67, spr04: 74.54, spr05: 60.56, spr06: 71.01,
    si01: 62.36, si02: 46.55, si03: 48.24,
    spn01: 69.86, spn02: 65.66,
    spl01: 71.65, spl02: 73.68,
    ssp01: 100, ssp02: 100, ssp03: 100, ssp04: 100, ssp05: 75,
    sptk01: 57.74, sptk02: 64.11, sptk03: 50.00, sptk04: 100,
    sb01: 47.04,
  },
  {
    tahun: 2025, npsn: '20105618', namaSekolah: 'SD ASIH MULIA',
    jenjang: 'SD', statusSekolah: 'Swasta', kabupaten: 'Kota Adm. Jakarta Barat',
    provinsi: 'Prov. D.K.I. Jakarta', akreditasi: 'B', siswa: 123, kecamatan: 'Kec. Kali Deres',
    standarIsi: 87.01, standarKelulusan: 70.12, standarPengelolaan: 92.85,
    standarPenilaian: 82.85, standarProses: 86.43, standarSarpras: 85.69,
    standarPtk: 64.35, standarBiaya: 28.07, snp: 74.67,
    mengikutiAN: 'Ya', statusAN: 'Ikut AN', statusLogin: 'Sudah Akses',
    statusUnduh: 'Sudah Unduh', statusAlokasi: 'Sudah Sesuai',
    skl01: 73.80, skl02: 61.37, skl03: 75.2,
    spr01: 86.14, spr02: 92.97, spr03: 91.34, spr04: 92.40, spr05: 78.66, spr06: 77.06,
    si01: 80.86, si02: 92.32, si03: 87.85,
    spn01: 85.67, spn02: 80.04,
    spl01: 94.05, spl02: 91.66,
    ssp01: 80, ssp02: 73.46, ssp03: 100, ssp04: 100, ssp05: 75,
    sptk01: 91.67, sptk02: 94.31, sptk03: 0, sptk04: 71.43,
    sb01: 28.07,
  },
  {
    tahun: 2025, npsn: '20106239', namaSekolah: 'SD AL-AZHAR SYIFA BUDI',
    jenjang: 'SD', statusSekolah: 'Swasta', kabupaten: 'Kota Adm. Jakarta Selatan',
    provinsi: 'Prov. D.K.I. Jakarta', akreditasi: 'A', siswa: 189, kecamatan: 'Kec. Mampang Prapatan',
    standarIsi: 64.11, standarKelulusan: 67.10, standarPengelolaan: 83.18,
    standarPenilaian: 73.13, standarProses: 74.09, standarSarpras: 95.00,
    standarPtk: 73.51, standarBiaya: 100.00, snp: 78.76,
    mengikutiAN: 'Ya', statusAN: 'Ikut AN', statusLogin: 'Sudah Akses',
    statusUnduh: 'Sudah Unduh', statusAlokasi: 'Belum Sesuai',
    skl01: 75.69, skl02: 60.81, skl03: 64.8,
    spr01: 69.64, spr02: 73.41, spr03: 76.88, spr04: 79.91, spr05: 69.13, spr06: 75.55,
    si01: 66.47, si02: 62.31, si03: 63.54,
    spn01: 67.60, spn02: 78.65,
    spl01: 86.54, spl02: 79.83,
    ssp01: 100, ssp02: 100, ssp03: 100, ssp04: 100, ssp05: 75,
    sptk01: 70.37, sptk02: 75.68, sptk03: 52.00, sptk04: 96.00,
    sb01: 100.00,
  },
  {
    tahun: 2025, npsn: '20106228', namaSekolah: 'SD AL BAYYINAH MUHAMMADIYAH',
    jenjang: 'SD', statusSekolah: 'Swasta', kabupaten: 'Kota Adm. Jakarta Selatan',
    provinsi: 'Prov. D.K.I. Jakarta', akreditasi: 'A', siswa: 456, kecamatan: 'Kec. Jagakarsa',
    standarIsi: 70.29, standarKelulusan: 73.57, standarPengelolaan: 84.75,
    standarPenilaian: 73.39, standarProses: 76.10, standarSarpras: 84.63,
    standarPtk: 71.84, standarBiaya: 37.69, snp: 71.53,
    mengikutiAN: 'Ya', statusAN: 'Ikut AN', statusLogin: 'Sudah Akses',
    statusUnduh: 'Sudah Unduh', statusAlokasi: 'Belum Sesuai',
    skl01: 83.27, skl02: 68.44, skl03: 69.0,
    spr01: 73.41, spr02: 73.94, spr03: 81.08, spr04: 80.46, spr05: 70.68, spr06: 77.03,
    si01: 68.30, si02: 71.25, si03: 71.31,
    spn01: 68.40, spn02: 78.39,
    spl01: 88.27, spl02: 81.24,
    ssp01: 100, ssp02: 80.67, ssp03: 100, ssp04: 80, ssp05: 62.5,
    sptk01: 86.07, sptk02: 72.13, sptk03: 33.33, sptk04: 95.83,
    sb01: 37.69,
  },
];

 */

/**
 * Fungsi utama untuk mendapatkan data SNP
 * Akan mencoba ambil dari Google Sheets, fallback ke dummy data jika gagal
 */


export async function getSNPData(): Promise<SekolahData[]> {


  try {
    return await fetchFromGoogleSheets();
  } catch (error) {
    console.error('[SNP Dashboard] Gagal ambil data dari Google Sheets:', error);
    return DUMMY_DATA;
  }
}



// Helper: Hitung rata-rata SNP per kabupaten
export function avgByKabupaten(data: SekolahData[]) {
  const grouped: Record<string, { total: number; count: number; standar: Record<string, number[]> }> = {};

  data.forEach(s => {
    if (s.snp === 0) return;
    if (!grouped[s.kabupaten]) {
      grouped[s.kabupaten] = { total: 0, count: 0, standar: {} };
    }
    grouped[s.kabupaten].total += s.snp;
    grouped[s.kabupaten].count++;

    const fields = ['standarIsi', 'standarKelulusan', 'standarPengelolaan', 'standarPenilaian', 'standarProses', 'standarSarpras', 'standarPtk', 'standarBiaya'];
    fields.forEach(f => {
      if (!grouped[s.kabupaten].standar[f]) grouped[s.kabupaten].standar[f] = [];
      grouped[s.kabupaten].standar[f].push((s as any)[f]);
    });
  });

  return Object.entries(grouped).map(([kab, v]) => ({
    kabupaten: kab,
    avgSNP: v.total / v.count,
    count: v.count,
    standar: Object.fromEntries(
      Object.entries(v.standar).map(([k, arr]) => [k, arr.reduce((a, b) => a + b, 0) / arr.length])
    ),
  }));
}

// Helper: Distribusi akreditasi
export function akreditasiDistribusi(data: SekolahData[]) {
  const dist: Record<string, number> = {};
  data.forEach(s => {
    const ak = s.akreditasi || 'Tidak diisi';
    dist[ak] = (dist[ak] || 0) + 1;
  });
  return dist;
}

// Helper: Status AN
export function statusANDistribusi(data: SekolahData[]) {
  const ikut = data.filter(s => s.statusAN === 'Ikut AN').length;
  const tidak = data.length - ikut;
  return { ikut, tidak, total: data.length };
}

// Helper: Status Alokasi
export function statusAlokasiDistribusi(data: SekolahData[]) {
  const dist: Record<string, number> = {};
  data.forEach(s => {
    const status = s.statusAlokasi || 'Belum diisi';
    dist[status] = (dist[status] || 0) + 1;
  });
  return dist;
}

// Helper: Top/Bottom sekolah berdasarkan SNP
export function rankingSekolah(data: SekolahData[], top = true, n = 5) {
  const filtered = data.filter(s => s.snp > 0);
  filtered.sort((a, b) => top ? b.snp - a.snp : a.snp - b.snp);
  return filtered.slice(0, n);
}
