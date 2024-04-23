import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BelxYkfp.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BpC6N3iB.mjs');
const _page1 = () => import('./chunks/about_DxGE9JoH.mjs');
const _page2 = () => import('./chunks/register_C-6MDJlE.mjs');
const _page3 = () => import('./chunks/signin_C3wLO7qP.mjs');
const _page4 = () => import('./chunks/signout_FrUz1Lg9.mjs');
const _page5 = () => import('./chunks/_id__Cx--aMbB.mjs');
const _page6 = () => import('./chunks/index_qox7VBRW.mjs');
const _page7 = () => import('./chunks/_id__3ztPsoTj.mjs');
const _page8 = () => import('./chunks/index_DJTFRooe.mjs');
const _page9 = () => import('./chunks/updateUser_C_oxx9DR.mjs');
const _page10 = () => import('./chunks/index_B3EsTEr7.mjs');
const _page11 = () => import('./chunks/_.._C7hz-t0M.mjs');
const _page12 = () => import('./chunks/account_Dmpv0A4_.mjs');
const _page13 = () => import('./chunks/_tag__DxAo0Z-w.mjs');
const _page14 = () => import('./chunks/index_C48Qrg9i.mjs');
const _page15 = () => import('./chunks/faq_D-rajUF4.mjs');
const _page16 = () => import('./chunks/help_wRaVhuSh.mjs');
const _page17 = () => import('./chunks/main_DvT8Ii37.mjs');
const _page18 = () => import('./chunks/index_BAK7gAok.mjs');
const _page19 = () => import('./chunks/_.._BxnMXPmh.mjs');
const _page20 = () => import('./chunks/settings_C1aA_5Jc.mjs');
const _page21 = () => import('./chunks/types_CRg8tgx1.mjs');
const _page22 = () => import('./chunks/register_ColCH134.mjs');
const _page23 = () => import('./chunks/rss_EriyZLx0.mjs');
const _page24 = () => import('./chunks/signin_DUkT4unV.mjs');
const _page25 = () => import('./chunks/_tag__CG--qwM9.mjs');
const _page26 = () => import('./chunks/index_Dow5Mvmm.mjs');
const _page27 = () => import('./chunks/index_DLEQLkA3.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/api/database/lessons/[id].ts", _page5],
    ["src/pages/api/database/lessons/index.ts", _page6],
    ["src/pages/api/database/user/[id].ts", _page7],
    ["src/pages/api/database/user/index.ts", _page8],
    ["src/pages/api/updateUser.ts", _page9],
    ["src/pages/blog/index.astro", _page10],
    ["src/pages/blog/[...slug].astro", _page11],
    ["src/pages/dashboard/account.astro", _page12],
    ["src/pages/dashboard/categorical_tags/[tag].astro", _page13],
    ["src/pages/dashboard/categorical_tags/index.astro", _page14],
    ["src/pages/dashboard/faq.astro", _page15],
    ["src/pages/dashboard/help.astro", _page16],
    ["src/pages/dashboard/main.astro", _page17],
    ["src/pages/dashboard/premium_blog/index.astro", _page18],
    ["src/pages/dashboard/premium_blog/[...slug].astro", _page19],
    ["src/pages/dashboard/settings.astro", _page20],
    ["src/pages/dashboard/types.ts", _page21],
    ["src/pages/register.astro", _page22],
    ["src/pages/rss.xml.js", _page23],
    ["src/pages/signin.astro", _page24],
    ["src/pages/tags/[tag].astro", _page25],
    ["src/pages/tags/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
