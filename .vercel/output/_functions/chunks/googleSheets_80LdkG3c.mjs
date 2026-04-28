import { e as createComponent, o as renderHead, g as addAttribute, n as renderComponent, r as renderTemplate, p as renderSlot, l as renderScript, h as createAstro, q as Fragment } from './astro/server_3fFcbplZ.mjs';
import 'piccolore';
/* empty css                         */

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const {
    title,
    subtitle = "Provinsi DKI Jakarta \xB7 2025",
    activeMenu = "overview"
  } = Astro2.props;
  const menuItems = [
    { id: "overview", label: "Overview", href: "/", icon: "grid" },
    { id: "radar", label: "Radar SNP", href: "/radar", icon: "radar" },
    { id: "sekolah", label: "Data Sekolah", href: "/sekolah", icon: "school" },
    { id: "kabupaten", label: "Per Wilayah", href: "/kabupaten", icon: "map" },
    { id: "ranking", label: "Ranking", href: "/ranking", icon: "trophy" }
  ];
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} — Dashboard SNP</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">${renderHead()}</head> <body> <!-- Mobile toggle --> <button class="mobile-toggle" id="mobileToggle" aria-label="Menu"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> <div class="app"> <!-- ══ SIDEBAR ══ --> <aside class="sidebar" id="sidebar"> <div class="sidebar-brand"> <div class="brand-logo"> <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> </div> <div class="brand-info"> <div class="brand-name">Dashboard SNP</div> <div class="brand-sub">Standar Nasional Pendidikan</div> </div> </div> <div class="sidebar-body"> <div class="nav-group"> <div class="nav-group-label">Menu Utama</div> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`nav-item ${activeMenu === item.id ? "active" : ""}`, "class")}> <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> ${item.icon === "grid" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <rect x="3" y="3" width="7" height="7" rx="1"></rect> <rect x="14" y="3" width="7" height="7" rx="1"></rect> <rect x="3" y="14" width="7" height="7" rx="1"></rect> <rect x="14" y="14" width="7" height="7" rx="1"></rect> ` })}`} ${item.icon === "radar" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <circle cx="12" cy="12" r="9"></circle> <circle cx="12" cy="12" r="4"></circle> <circle cx="12" cy="12" r="1" fill="currentColor"></circle> <line x1="12" y1="3" x2="12" y2="8"></line> <line x1="12" y1="16" x2="12" y2="21"></line> <line x1="3" y1="12" x2="8" y2="12"></line> <line x1="16" y1="12" x2="21" y2="12"></line> ` })}`} ${item.icon === "school" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path d="M3 21V9l9-6 9 6v12"></path> <path d="M9 21v-6a3 3 0 016 0v6"></path> ` })}`} ${item.icon === "map" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon> <line x1="8" y1="2" x2="8" y2="18"></line> <line x1="16" y1="6" x2="16" y2="22"></line> ` })}`} ${item.icon === "trophy" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path d="M6 9H4.5a2.5 2.5 0 010-5H6"></path> <path d="M18 9h1.5a2.5 2.5 0 000-5H18"></path> <path d="M4 22h16"></path> <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path> <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path> <path d="M18 2H6v7a6 6 0 0012 0V2z"></path> ` })}`} </svg> <span class="nav-label">${item.label}</span> </a>`)} </div> </div> <div class="sidebar-footer"> <div class="sidebar-status"> <div class="status-dot"></div> <span class="status-label">Live · 2025 · DKI Jakarta</span> </div> <button class="collapse-btn" id="collapseBtn"> <svg class="collapse-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"> <path d="M11 19l-7-7 7-7"></path><path d="M21 19l-7-7 7-7"></path> </svg> <span class="collapse-label">Tutup Panel</span> </button> </div> </aside> <!-- ══ MAIN ══ --> <div class="main" id="main"> <header class="topbar"> <div class="topbar-left"> <div class="page-title">${title}</div> <div class="page-sub">${subtitle}</div> </div> <div class="topbar-right"> <button class="btn" onclick="window.print()"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
Export
</button> <button class="btn btn-primary" onclick="location.reload()"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path></svg>
Refresh
</button> </div> </header> <main class="page-content"> ${renderSlot($$result, $$slots["default"])} </main> </div> </div> ${renderScript($$result, "G:/web/2snp/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "G:/web/2snp/src/layouts/DashboardLayout.astro", void 0);

const SHEETS_CONFIG = {
  // Ganti dengan Spreadsheet ID dari URL Google Sheets Anda
  // Contoh: https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
  SPREADSHEET_ID: "163_8O_ES0EaY7fo2fuRy9fChT60NoWvFprZMafVlnhU",
  // Range data (sesuaikan dengan data Anda)
  RANGE: "Sheet1!A1:BG10000",
  // Google Sheets API Key (gunakan variabel environment untuk keamanan)
  API_KEY: "AIzaSyAA9BJvIMaRxTT-gqnbdxm8TIeTqNv4neA"
};
async function fetchFromGoogleSheets() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.SPREADSHEET_ID}/values/${encodeURIComponent(SHEETS_CONFIG.RANGE)}?key=${SHEETS_CONFIG.API_KEY}`;
  const response = await fetch(url, {
    cache: "no-store"
    // ← tambah ini, matikan cache
  });
  if (!response.ok) {
    throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  const rows = data.values;
  if (!rows || rows.length < 2) {
    return [];
  }
  return rows.slice(1).map((row) => parseRow(row));
}
function parseRow(row) {
  const num = (v) => parseFloat(v || "0") || 0;
  const str = (v) => v?.trim() || "";
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
    skl01: num(row[29]),
    skl02: num(row[30]),
    skl03: num(row[31]),
    spr01: num(row[35]),
    spr02: num(row[36]),
    spr03: num(row[37]),
    spr04: num(row[38]),
    spr05: num(row[39]),
    spr06: num(row[40]),
    si01: num(row[41]),
    si02: num(row[42]),
    si03: num(row[43]),
    spn01: num(row[44]),
    spn02: num(row[45]),
    spl01: num(row[46]),
    spl02: num(row[47]),
    ssp01: num(row[48]),
    ssp02: num(row[49]),
    ssp03: num(row[50]),
    ssp04: num(row[51]),
    ssp05: num(row[52]),
    sptk01: num(row[53]),
    sptk02: num(row[54]),
    sptk03: num(row[55]),
    sptk04: num(row[56]),
    sb01: num(row[57])
  };
}
async function getSNPData() {
  try {
    return await fetchFromGoogleSheets();
  } catch (error) {
    console.error("[SNP Dashboard] Gagal ambil data dari Google Sheets:", error);
    return DUMMY_DATA;
  }
}
function avgByKabupaten(data) {
  const grouped = {};
  data.forEach((s) => {
    if (s.snp === 0) return;
    if (!grouped[s.kabupaten]) {
      grouped[s.kabupaten] = { total: 0, count: 0, standar: {} };
    }
    grouped[s.kabupaten].total += s.snp;
    grouped[s.kabupaten].count++;
    const fields = ["standarIsi", "standarKelulusan", "standarPengelolaan", "standarPenilaian", "standarProses", "standarSarpras", "standarPtk", "standarBiaya"];
    fields.forEach((f) => {
      if (!grouped[s.kabupaten].standar[f]) grouped[s.kabupaten].standar[f] = [];
      grouped[s.kabupaten].standar[f].push(s[f]);
    });
  });
  return Object.entries(grouped).map(([kab, v]) => ({
    kabupaten: kab,
    avgSNP: v.total / v.count,
    count: v.count,
    standar: Object.fromEntries(
      Object.entries(v.standar).map(([k, arr]) => [k, arr.reduce((a, b) => a + b, 0) / arr.length])
    )
  }));
}
function rankingSekolah(data, top = true, n = 5) {
  const filtered = data.filter((s) => s.snp > 0);
  filtered.sort((a, b) => top ? b.snp - a.snp : a.snp - b.snp);
  return filtered.slice(0, n);
}

export { $$DashboardLayout as $, avgByKabupaten as a, getSNPData as g, rankingSekolah as r };
