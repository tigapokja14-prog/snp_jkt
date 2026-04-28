/* empty css                                 */
import { e as createComponent, r as renderTemplate, k as defineScriptVars, l as renderScript, n as renderComponent, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_3fFcbplZ.mjs';
import 'piccolore';
import { g as getSNPData, a as avgByKabupaten, $ as $$DashboardLayout } from '../chunks/googleSheets_80LdkG3c.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Kabupaten = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getSNPData();
  const kabData = avgByKabupaten(data).sort((a, b) => b.avgSNP - a.avgSNP);
  const standarLabels = [
    "Standar Isi",
    "Standar Kelulusan",
    "Standar Pengelolaan",
    "Standar Penilaian",
    "Standar Proses",
    "Standar Sarpras",
    "Standar PTK",
    "Standar Biaya"
  ];
  const standarKeys = [
    "standarIsi",
    "standarKelulusan",
    "standarPengelolaan",
    "standarPenilaian",
    "standarProses",
    "standarSarpras",
    "standarPtk",
    "standarBiaya"
  ];
  const standarShort = ["SI", "SKL", "SPL", "SPN", "SPR", "SSP", "SPTK", "SB"];
  const kabColors = [
    "#2563EB",
    "#16A34A",
    "#9333EA",
    "#EA580C",
    "#0891B2",
    "#DC2626"
  ];
  const kabDetail = kabData.map((kab, i) => ({
    name: kab.kabupaten.replace("Kota Adm. ", ""),
    count: kab.count,
    avgSNP: kab.avgSNP,
    color: kabColors[i],
    standar: standarKeys.map((k) => +(kab.standar[k] || 0).toFixed(1))
  }));
  function snpColor(v) {
    if (v >= 75) return "#059669";
    if (v >= 60) return "#D97706";
    return "#DC2626";
  }
  return renderTemplate(_a || (_a = __template(["", " ", " <script>(function(){", '\n  const TOOLTIP = {\n    backgroundColor: "#fff",\n    borderColor: "#E8EAEE",\n    borderWidth: 1,\n    titleColor: "#111827",\n    bodyColor: "#4B5563",\n    padding: 10,\n    cornerRadius: 8,\n  };\n  const SCALE_R = {\n    min: 0,\n    max: 100,\n    ticks: {\n      stepSize: 25,\n      color: "#9CA3AF",\n      backdropColor: "transparent",\n      font: { size: 10 },\n    },\n    grid: { color: "#E8EAEE" },\n    pointLabels: { color: "#6B7280", font: { size: 11 } },\n    angleLines: { color: "#E8EAEE" },\n  };\n\n  function initCharts() {\n    if (typeof Chart === "undefined") {\n      setTimeout(initCharts, 50);\n      return;\n    }\n\n    new Chart(document.getElementById("radarAll"), {\n      type: "radar",\n      data: {\n        labels: standarLabels,\n        datasets: kabDetail.map((kab) => ({\n          label: kab.name,\n          data: kab.standar,\n          borderColor: kab.color,\n          backgroundColor: kab.color + "08",\n          borderWidth: 1.5,\n          pointBackgroundColor: "#fff",\n          pointBorderColor: kab.color,\n          pointBorderWidth: 2,\n          pointRadius: 4,\n          pointHoverRadius: 6,\n        })),\n      },\n      options: {\n        responsive: true,\n        maintainAspectRatio: false,\n        plugins: {\n          legend: {\n            position: "bottom",\n            labels: {\n              color: "#4B5563",\n              font: { size: 12 },\n              padding: 16,\n              boxWidth: 10,\n              borderRadius: 3,\n            },\n          },\n          tooltip: TOOLTIP,\n        },\n        scales: { r: SCALE_R },\n      },\n    });\n\n    new Chart(document.getElementById("barKab"), {\n      type: "bar",\n      data: {\n        labels: standarShort,\n        datasets: kabDetail.map((kab) => ({\n          label: kab.name,\n          data: kab.standar,\n          backgroundColor: kab.color + "55",\n          borderColor: kab.color,\n          borderWidth: 1.5,\n          borderRadius: 4,\n          hoverBackgroundColor: kab.color + "99",\n        })),\n      },\n      options: {\n        responsive: true,\n        maintainAspectRatio: false,\n        plugins: {\n          legend: {\n            position: "bottom",\n            labels: {\n              color: "#4B5563",\n              font: { size: 12 },\n              padding: 16,\n              boxWidth: 10,\n              borderRadius: 3,\n            },\n          },\n          tooltip: TOOLTIP,\n        },\n        scales: {\n          x: {\n            grid: { color: "#F3F4F6" },\n            ticks: { color: "#6B7280", font: { size: 12 } },\n          },\n          y: {\n            min: 0,\n            max: 100,\n            grid: { color: "#F3F4F6" },\n            ticks: { color: "#6B7280", font: { size: 12 } },\n          },\n        },\n      },\n    });\n  }\n\n  if (document.readyState === "loading")\n    document.addEventListener("DOMContentLoaded", initCharts);\n  else initCharts();\n})();<\/script>'])), renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Per Wilayah", "activeMenu": "kabupaten" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="margin-bottom:16px;color:var(--text-secondary);font-size:13.5px" class="fade-up">
Analisis SNP berdasarkan 5 wilayah administratif Kota Jakarta.
</div>  <div class="card mb-6 fade-up d1"> <div class="card-header"> <div class="card-title">Radar Perbandingan 5 Wilayah</div> </div> <div style="display:grid;grid-template-columns:1fr 380px;gap:28px;align-items:start"> <div style="position:relative;height:400px"> <canvas id="radarAll"></canvas> </div> <div style="display:flex;flex-direction:column;gap:10px;padding-top:4px"> ${kabDetail.map((kab, i) => renderTemplate`<div${addAttribute(`padding:14px 16px;background:var(--bg-subtle);border-radius:9px;border:1px solid var(--border-light)`, "style")}> <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"> <div style="display:flex;align-items:center;gap:8px"> <div${addAttribute(`width:10px;height:10px;border-radius:2px;background:${kab.color}`, "style")}></div> <span style="font-size:13.5px;font-weight:500;color:var(--text-primary)"> ${kab.name} </span> </div> <div> <span class="mono"${addAttribute(`font-size:17px;font-weight:600;color:${snpColor(kab.avgSNP)}`, "style")}> ${kab.avgSNP.toFixed(1)} </span> <span style="font-size:11px;color:var(--text-tertiary);margin-left:5px"> ${kab.count} sekolah
</span> </div> </div> <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px"> ${standarShort.map((sh, j) => renderTemplate`<div style="text-align:center;padding:4px 2px;background:var(--bg-surface);border-radius:5px;border:1px solid var(--border-light)"> <div class="mono"${addAttribute(`font-size:11px;font-weight:600;color:${kab.color}`, "style")}> ${kab.standar[j]} </div> <div style="font-size:9px;color:var(--text-tertiary);margin-top:1px"> ${sh} </div> </div>`)} </div> </div>`)} </div> </div> </div>  <div class="card fade-up d2"> <div class="card-header"> <div class="card-title">Perbandingan Per Standar</div> <span class="badge badge-gray">Semua wilayah</span> </div> <div style="position:relative;height:340px"> <canvas id="barKab"></canvas> </div> </div> ` }), renderScript($$result, "G:/web/2snp/src/pages/kabupaten.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ kabDetail, standarLabels, standarShort }));
}, "G:/web/2snp/src/pages/kabupaten.astro", void 0);

const $$file = "G:/web/2snp/src/pages/kabupaten.astro";
const $$url = "/kabupaten";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kabupaten,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
