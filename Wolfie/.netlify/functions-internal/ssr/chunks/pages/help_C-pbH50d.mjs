import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from './account_NEHjQo-c.mjs';

const $$Astro = createAstro("https://example.com");
const $$Help = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Help;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Help page", "description": "Need help with anything? Send us an email" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="help"> <h1>Help</h1> </div> ` })}`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/help.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/help.astro";
const $$url = "/dashboard/help";

export { $$Help as default, $$file as file, $$url as url };
