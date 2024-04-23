import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, k as renderHead, i as renderSlot, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { d as $$BaseHead, e as $$Header, f as $$Footer } from './__CN0_D3ga.mjs';
/* empty css                             */

const $$Astro$1 = createAstro("https://example.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body id="html_body" class="html_body"> ${renderComponent($$result, "Header", $$Header, { "title": title })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register", "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-qraosrxq>Register</h1> <p data-astro-cid-qraosrxq>Already have an account? <a href="/signin" data-astro-cid-qraosrxq>Sign in</a></p> <form action="/api/auth/register" method="post" data-astro-cid-qraosrxq> <label for="name" data-astro-cid-qraosrxq>Name</label> <input type="text" name="name" id="name" data-astro-cid-qraosrxq> <label for="email" for="email" data-astro-cid-qraosrxq>Email</label> <input type="email" name="email" id="email" data-astro-cid-qraosrxq> <label for="password" data-astro-cid-qraosrxq>Password</label> <input type="password" name="password" id="password" data-astro-cid-qraosrxq> <button type="submit" data-astro-cid-qraosrxq>Register</button> </form> ` })} `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/register.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/register.astro";
const $$url = "/register";

const register = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, register as r };
