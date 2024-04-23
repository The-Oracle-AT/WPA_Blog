import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { a as app } from './__Cy41gj0q.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from './register_CBptzAIi.mjs';
/* empty css                           */

const $$Astro = createAstro("https://example.com");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("session")) {
    const session = Astro2.cookies.get("session");
    if (!session) {
      return Astro2.redirect("/signin");
    }
    const sessionCookie = session.value;
    const decodedCookie = await auth.verifySessionCookie(sessionCookie, true);
    if (decodedCookie) {
      return Astro2.redirect("/dashboard/main");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in - LearnBetter", "description": "Sign in to access guided learning and personalized features.", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-cj4bt2fj>Sign in</h1> <small data-astro-cid-cj4bt2fj>The interactive platform feature is still under development- this will be the biggest update yet, other features will be released, for early access! Only a select few can preview it!</small> <small data-astro-cid-cj4bt2fj></small>    ` })}  `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/signin.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
