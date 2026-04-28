import 'piccolore';
import { v as decodeKey } from './chunks/astro/server_3fFcbplZ.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B11yk_CI.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/web/2snp/","cacheDir":"file:///G:/web/2snp/node_modules/.astro/","outDir":"file:///G:/web/2snp/dist/","srcDir":"file:///G:/web/2snp/src/","publicDir":"file:///G:/web/2snp/public/","buildClientDir":"file:///G:/web/2snp/dist/client/","buildServerDir":"file:///G:/web/2snp/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D716hbDs.css"}],"routeData":{"route":"/kabupaten","isIndex":false,"type":"page","pattern":"^\\/kabupaten\\/?$","segments":[[{"content":"kabupaten","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kabupaten.astro","pathname":"/kabupaten","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D716hbDs.css"},{"type":"inline","content":".filter-btn[data-astro-cid-kfu53kx4]{padding:5px 14px;border-radius:99px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--text-secondary);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s}.filter-btn[data-astro-cid-kfu53kx4]:hover{background:var(--bg-subtle);color:var(--text-primary)}.filter-btn[data-astro-cid-kfu53kx4].active{background:var(--accent);border-color:var(--accent);color:#fff}.tab-btn[data-astro-cid-kfu53kx4]{padding:6px 16px;border-radius:7px;border:none;background:transparent;color:var(--text-secondary);font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;transition:all .15s}.tab-btn[data-astro-cid-kfu53kx4].active{background:var(--bg-surface);color:var(--text-primary);box-shadow:0 1px 3px #00000014}.tab-btn[data-astro-cid-kfu53kx4]:hover:not(.active){color:var(--text-primary)}input[data-astro-cid-kfu53kx4][type=text]{width:100%;padding:8px 12px;border:1px solid var(--border-medium);border-radius:8px;font-size:13.5px;font-family:inherit;background:var(--bg-surface);color:var(--text-primary);outline:none;transition:border-color .15s}input[data-astro-cid-kfu53kx4][type=text]:focus{border-color:var(--accent)}input[data-astro-cid-kfu53kx4][type=text]::-moz-placeholder{color:var(--text-tertiary)}input[data-astro-cid-kfu53kx4][type=text]::placeholder{color:var(--text-tertiary)}.search-drop[data-astro-cid-kfu53kx4]{position:absolute;top:calc(100% + 4px);left:0;right:0;background:var(--bg-surface);border:1px solid var(--border-light);border-radius:8px;z-index:50;max-height:220px;overflow-y:auto;display:none;box-shadow:0 4px 16px #00000014}.drop-item[data-astro-cid-kfu53kx4]{padding:9px 12px;font-size:13px;cursor:pointer;border-bottom:1px solid var(--border-light);color:var(--text-primary);transition:background .1s}.drop-item[data-astro-cid-kfu53kx4]:last-child{border-bottom:none}.drop-item[data-astro-cid-kfu53kx4]:hover{background:var(--bg-subtle)}.chip[data-astro-cid-kfu53kx4]{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:500;border:1px solid}.chip-x[data-astro-cid-kfu53kx4]{cursor:pointer;opacity:.6;transition:opacity .1s}.chip-x[data-astro-cid-kfu53kx4]:hover{opacity:1}\n"}],"routeData":{"route":"/radar","isIndex":false,"type":"page","pattern":"^\\/radar\\/?$","segments":[[{"content":"radar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/radar.astro","pathname":"/radar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D716hbDs.css"}],"routeData":{"route":"/ranking","isIndex":false,"type":"page","pattern":"^\\/ranking\\/?$","segments":[[{"content":"ranking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ranking.astro","pathname":"/ranking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D716hbDs.css"},{"type":"inline","content":".filter-btn[data-astro-cid-tydbrnya]{padding:5px 14px;border-radius:99px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--text-secondary);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s}.filter-btn[data-astro-cid-tydbrnya]:hover{background:var(--bg-subtle);color:var(--text-primary)}.filter-btn[data-astro-cid-tydbrnya].active{background:var(--accent);border-color:var(--accent);color:#fff}.sel[data-astro-cid-tydbrnya]{padding:8px 12px;border:1px solid var(--border-medium);border-radius:8px;font-size:13.5px;font-family:inherit;background:var(--bg-surface);color:var(--text-primary);cursor:pointer;outline:none}.sel[data-astro-cid-tydbrnya]:focus{border-color:var(--accent)}input[data-astro-cid-tydbrnya][type=text]:focus{border-color:var(--accent)!important;outline:none}\n"}],"routeData":{"route":"/sekolah","isIndex":false,"type":"page","pattern":"^\\/sekolah\\/?$","segments":[[{"content":"sekolah","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sekolah.astro","pathname":"/sekolah","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D716hbDs.css"},{"type":"inline","content":".filter-btn[data-astro-cid-j7pv25f6]{padding:5px 14px;border-radius:99px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--text-secondary);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s}.filter-btn[data-astro-cid-j7pv25f6]:hover{background:var(--bg-subtle);color:var(--text-primary)}.filter-btn[data-astro-cid-j7pv25f6].active{background:var(--accent);border-color:var(--accent);color:#fff}.kpi-accent[data-astro-cid-j7pv25f6]{color:var(--accent)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/web/2snp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["G:/web/2snp/src/pages/kabupaten.astro",{"propagation":"none","containsHead":true}],["G:/web/2snp/src/pages/radar.astro",{"propagation":"none","containsHead":true}],["G:/web/2snp/src/pages/ranking.astro",{"propagation":"none","containsHead":true}],["G:/web/2snp/src/pages/sekolah.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/kabupaten@_@astro":"pages/kabupaten.astro.mjs","\u0000@astro-page:src/pages/radar@_@astro":"pages/radar.astro.mjs","\u0000@astro-page:src/pages/ranking@_@astro":"pages/ranking.astro.mjs","\u0000@astro-page:src/pages/sekolah@_@astro":"pages/sekolah.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C4EEv3ey.mjs","G:/web/2snp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_pbuEwGEY.mjs","G:/web/2snp/src/pages/radar.astro?astro&type=script&index=0&lang.ts":"_astro/radar.astro_astro_type_script_index_0_lang.CA_cwkdU.js","G:/web/2snp/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts":"_astro/DashboardLayout.astro_astro_type_script_index_0_lang.Jknfb8Zb.js","G:/web/2snp/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CA_cwkdU.js","G:/web/2snp/src/pages/kabupaten.astro?astro&type=script&index=0&lang.ts":"_astro/kabupaten.astro_astro_type_script_index_0_lang.CA_cwkdU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["G:/web/2snp/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"sidebar\"),s=document.getElementById(\"main\"),a=document.getElementById(\"collapseBtn\"),l=document.getElementById(\"mobileToggle\"),n=220,i=60;function o(t){t?(e.style.width=i+\"px\",s.style.marginLeft=i+\"px\",e.classList.add(\"collapsed\")):(e.style.width=n+\"px\",s.style.marginLeft=n+\"px\",e.classList.remove(\"collapsed\")),localStorage.setItem(\"sidebarCollapsed\",t)}const c=localStorage.getItem(\"sidebarCollapsed\")===\"true\";e.style.transition=\"none\";s.style.transition=\"none\";o(c);requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.transition=\"width 0.22s cubic-bezier(0.4,0,0.2,1)\",s.style.transition=\"margin-left 0.22s cubic-bezier(0.4,0,0.2,1)\"})});a?.addEventListener(\"click\",()=>{const t=!e.classList.contains(\"collapsed\");o(t)});l?.addEventListener(\"click\",()=>{e.classList.toggle(\"mobile-open\")});document.addEventListener(\"click\",t=>{window.innerWidth<=768&&e.classList.contains(\"mobile-open\")&&!e.contains(t.target)&&t.target!==l&&e.classList.remove(\"mobile-open\")});"]],"assets":["/_astro/index.D716hbDs.css","/_astro/index.astro_astro_type_script_index_0_lang.CA_cwkdU.js","/_astro/kabupaten.astro_astro_type_script_index_0_lang.CA_cwkdU.js","/_astro/radar.astro_astro_type_script_index_0_lang.CA_cwkdU.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"85CIv6kHdsq/L6hGdLfjL1613QaaH5G+lUKXv2+8W04="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
