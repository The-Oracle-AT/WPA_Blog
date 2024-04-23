import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, k as renderHead, i as renderSlot } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { $ as $$SiteName, b as $$HeaderLink, d as $$BaseHead, e as $$Header, f as $$Footer, g as getUserData } from './__Cy41gj0q.mjs';
import 'clsx';
/* empty css                            */

const $$Astro$3 = createAstro("https://example.com");
const $$Arrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<div class="arrow" id="arrow" data-astro-cid-phkex25q> <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-phkex25q> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-phkex25q></path> </svg> </div> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/Arrow.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideBar;
  return renderTemplate` ${maybeRenderHead()}<header class="sidenav" id="sidenav" data-astro-cid-vuiyvguh> <nav class="sidebar" data-astro-cid-vuiyvguh> <ul data-astro-cid-vuiyvguh> <li data-astro-cid-vuiyvguh> <h2 data-astro-cid-vuiyvguh><a href="/" data-astro-cid-vuiyvguh>${renderComponent($$result, "SiteName", $$SiteName, { "data-astro-cid-vuiyvguh": true })}</a></h2></li> <li id="arrow-icon" data-astro-cid-vuiyvguh>${renderComponent($$result, "Arrow", $$Arrow, { "data-astro-cid-vuiyvguh": true })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/main", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`Dashboard` })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/premium_blog/", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`Courses` })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/account", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`Account` })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/settings", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`Settings` })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/faq", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`FAQ` })}</li> <li data-astro-cid-vuiyvguh>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/dashboard/help", "data-astro-cid-vuiyvguh": true }, { "default": ($$result2) => renderTemplate`Help` })}</li> <li data-astro-cid-vuiyvguh><form action="/api/auth/signout" data-astro-cid-vuiyvguh><button type="submit" data-astro-cid-vuiyvguh>signout</button></form></li> </ul> </nav> </header> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/SideBar.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$DashboardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body id="html_body" class="html_body"> ${renderComponent($$result, "Header", $$Header, { "title": title })} ${renderComponent($$result, "SideBar", $$SideBar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/layouts/DashboardLayout.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
  const sessionCookie = Astro2.cookies.get("session")?.value ?? null;
  const user = await getUserData(sessionCookie);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  let details = user.displayName?.split("_");
  let currentUser;
  currentUser = {
    name: " name data",
    username: " username data",
    institution: "institution data"
  };
  if (details) {
    currentUser = {
      name: details[0],
      username: details[1],
      institution: details[2]
    };
  }
  const id = user.uid;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Account - LearnBetter!", "descrption": "Edit or change your details on LearnBetter!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dash-cont"> <h1>
Account
</h1> <section> ${renderComponent($$result2, "UProfile", null, { "uid": id, "currentUserData": currentUser, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/UProfile.svelte", "client:component-export": "default" })} </section> <section>
Composition chart
</section> </div> ` })} `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/account.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/account.astro";
const $$url = "/dashboard/account";

const account = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Account,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DashboardLayout as $, account as a };
