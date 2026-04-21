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

// Helper: Status Login
export function statusLoginDistribusi(data: SekolahData[]) {
  const dist: Record<string, number> = {};
  data.forEach(s => {
    const status = s.statusLogin || 'Sudah Akses';
    dist[status] = (dist[status] || 0) + 1;
  });
  return dist;
}

// Helper: Status Unduh
export function statusUnduhDistribusi(data: SekolahData[]) {
  const dist: Record<string, number> = {};
  data.forEach(s => {
    const status = s.statusUnduh || 'sudah Unduh';
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
