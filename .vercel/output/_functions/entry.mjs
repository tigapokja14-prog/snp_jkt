import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CIE5DXbR.mjs';
import { manifest } from './manifest_C4EEv3ey.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/kabupaten.astro.mjs');
const _page2 = () => import('./pages/radar.astro.mjs');
const _page3 = () => import('./pages/ranking.astro.mjs');
const _page4 = () => import('./pages/sekolah.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/kabupaten.astro", _page1],
    ["src/pages/radar.astro", _page2],
    ["src/pages/ranking.astro", _page3],
    ["src/pages/sekolah.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "28357bdb-6e1f-4f96-b0f1-8d39d13fb24f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
