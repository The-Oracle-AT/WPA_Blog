import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from './account_NEHjQo-c.mjs';

const $$Astro = createAstro("https://example.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title-": "FAQ page", "description": "Read through the most popular asked questions about us and our website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="faq"> <h2 class="faq__title">Frequently Asked Questions</h2> <div class="faq__questions"></div> </div> ` })}`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/faq.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/faq.astro";
const $$url = "/dashboard/faq";

export { $$Faq as default, $$file as file, $$url as url };
