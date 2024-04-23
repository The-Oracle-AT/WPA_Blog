import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { g as getUserData, m as $$ThemeIcon } from './__CN0_D3ga.mjs';
import { $ as $$DashboardLayout } from './account_Dl4JDtHK.mjs';

const $$Astro = createAstro("https://example.com");
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const sessionCookie = Astro2.cookies.get("session")?.value ?? null;
  const user = await getUserData(sessionCookie);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Settings page", "description": "Change the appearence of your account to a theme of your liking!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dash-cont"> <h1>
Settings
</h1> <ul> <li>${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, {})}</li> <li>Notification settings</li> <li>Choose a language</li> <li>Help & Support</li> <li>Feedback & Suggestions</li> </ul> </div> ` })}`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/settings.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/settings.astro";
const $$url = "/dashboard/settings";

export { $$Settings as default, $$file as file, $$url as url };
