import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute, k as renderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { d as $$BaseHead, j as getCollection, k as $$Image, l as $$FormattedDate, e as $$Header, f as $$Footer, g as getUserData, $ as $$SiteName, b as $$HeaderLink } from './__CN0_D3ga.mjs';
/* empty css                          */
/* empty css                          */
/* empty css                          */
import 'clsx';
import { $ as $$DashboardLayout } from './account_Dl4JDtHK.mjs';
/* empty css                          */
/* empty css                          */

const SITE_TITLE = "LearnBetter";
const SITE_DESCRIPTION = "Welcome to my LearnBetter!";

const $$Astro$6 = createAstro("https://example.com");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/Finding your study Method 1.mdx": () => import('../Finding your study Method 1_D-y6HMgk.mjs'),"../../content/blog/Finding your study Method 2.mdx": () => import('../Finding your study Method 2_CXL2Ybry.mjs'),"../../content/blog/Tackling Long Form Questions.mdx": () => import('../Tackling Long Form Questions_CwqsA7hJ.mjs'),"../../content/blog/concentration-1.mdx": () => import('../concentration-1_yTxiHwF6.mjs'),"../../content/blog/role-model-1.mdx": () => import('../role-model-1_DkHOgd8L.mjs'),"../../content/blog/role-model-2.mdx": () => import('../role-model-2_B9c40m2L.mjs')}), () => "../../content/blog/*.mdx");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-pagefind-ignore": true, "data-astro-cid-os4i7owy": true })} ${maybeRenderHead()}<section class="container" data-pagefind-ignore data-astro-cid-os4i7owy> <p data-astro-cid-os4i7owy>Filter</p> <ul data-astro-cid-os4i7owy> ${tags && tags.map((tag) => renderTemplate`<li data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </li>`)} </ul> </section> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/tags/index.astro", void 0);

const $$file$4 = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/tags/index.astro";
const $$url$4 = "/tags";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://example.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  ).reverse();
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${renderComponent($$result, "Tags", $$Index$4, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> ${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "Lesson card", "data-astro-cid-5tznm7mj": true })} <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/blog/index.astro", void 0);

const $$file$3 = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/blog/index.astro";
const $$url$3 = "/blog";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://example.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  const allPosts = await getCollection("premium_blog");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-a3hrfaas": true })} ${maybeRenderHead()}<section class="container" data-astro-cid-a3hrfaas> <p data-astro-cid-a3hrfaas>Filter</p> <ul data-astro-cid-a3hrfaas> ${tags && tags.map((tag) => renderTemplate`<li data-astro-cid-a3hrfaas> <a${addAttribute(`/dashboard/categorical_tags/${tag}`, "href")} data-astro-cid-a3hrfaas>${tag}</a> </li>`)} </ul> </section> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/categorical_tags/index.astro", void 0);

const $$file$2 = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/categorical_tags/index.astro";
const $$url$2 = "/dashboard/categorical_tags";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://example.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<div id="search"></div> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/Search.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const sessionCookie = Astro2.cookies.get("session")?.value ?? null;
  const user = await getUserData(sessionCookie);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  const posts = (await getCollection("premium_blog")).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()).reverse();
  const categories = posts.map((post) => post.data.category);
  const uniqueCategories = [...new Set(categories)];
  const categorizedPosts = uniqueCategories.map((category) => {
    return {
      category,
      posts: posts.filter((post) => post.data.category === category),
      name: category.charAt(0).toUpperCase() + category.slice(1)
    };
  });
  return renderTemplate`<html lang="en" data-astro-cid-rha55ans> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-rha55ans": true })}${renderHead()}</head> ${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Courses - LearnBetter!", "description": "Discover new course and revisit old ones, there's always something to learn.", "data-astro-cid-rha55ans": true }, { "default": ($$result2) => renderTemplate` <div id="courses" data-astro-cid-rha55ans> <div data-astro-cid-rha55ans> ${renderComponent($$result2, "Search", $$Search, { "data-astro-cid-rha55ans": true })} <p data-astro-cid-rha55ans>Welcome back, ${user.displayName}!</p> </div> <div data-astro-cid-rha55ans> <section id="course_section" data-astro-cid-rha55ans> <h2 data-astro-cid-rha55ans>Latest Posts</h2> <ul data-astro-cid-rha55ans> ${posts.map((post) => renderTemplate`<li data-astro-cid-rha55ans> <a${addAttribute(`/dashboard/premium_blog/${post.slug}/`, "href")} data-astro-cid-rha55ans> ${renderComponent($$result2, "GreyFilter", null, { "uid": user.uid, "currentLessonTitle": post.data.title, "client:only": true, "client:component-hydration": "only", "data-astro-cid-rha55ans": true, "client:component-path": "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/GreyFilter.svelte", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "Lesson card", "data-astro-cid-rha55ans": true })} ` })} <h5 class="title" data-astro-cid-rha55ans>${post.data.title}</h5> <p class="date" data-astro-cid-rha55ans> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-rha55ans": true })} </p> </a> </li>`)} </ul> </section> </div> ${categorizedPosts.length > 0 ? renderTemplate`<div data-astro-cid-rha55ans> ${categorizedPosts.map((category, index) => renderTemplate`<section${addAttribute(`category_${index}_section`, "id")} data-astro-cid-rha55ans> <h3 data-astro-cid-rha55ans>${category.name} <a${addAttribute(`/dashboard/categorical_tags/${category.name}`, "href")} data-astro-cid-rha55ans> <span class="folder-wrapper" style="font-size: .75rem;" data-astro-cid-rha55ans> ${renderComponent($$result2, "Image", $$Image, { "src": "/icons/utils/folder-more.svg", "alt": "View category", "width": "24", "height": "24", "loading": "lazy", "data-astro-cid-rha55ans": true })} </span> </a> </h3> <ul${addAttribute(category.name, "class")} data-astro-cid-rha55ans> ${category.posts.map((post) => renderTemplate`<li data-astro-cid-rha55ans> <a${addAttribute(`/dashboard/premium_blog/${post.slug}`, "href")} data-astro-cid-rha55ans> ${renderComponent($$result2, "GreyFilter", null, { "uid": user.uid, "currentLessonTitle": post.data.title, "client:only": true, "client:component-hydration": "only", "data-astro-cid-rha55ans": true, "client:component-path": "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/GreyFilter.svelte", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": `${post.data.title}`, "data-astro-cid-rha55ans": true })} ` })} <h5 class="title" data-astro-cid-rha55ans>${post.data.title}</h5> <p class="date" data-astro-cid-rha55ans> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-rha55ans": true })} </p> </a> </li>`)} </ul> </section>`)} </div>` : renderTemplate`<p data-astro-cid-rha55ans>No categories found</p>`} </div> ` })} </html>`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/premium_blog/index.astro", void 0);

const $$file$1 = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/premium_blog/index.astro";
const $$url$1 = "/dashboard/premium_blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://example.com");
const $$NewFeatures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewFeatures;
  const updates = {
    info: [
      {
        title: "Newest Articles",
        desc: "Find all the latest article uploads in one place. Hover your cursor to view the card and click on it to read the article",
        date: "23 Jan 2024"
      },
      {
        title: "New Features",
        desc: "We are continuosly working on LearnBetter to give you  a better experience. Find out what we've been up to in this section!",
        date: "24 Jan 2024"
      },
      {
        title: "Long-Term Goals",
        desc: "Read about our planned updates over a period of 3 to 12 months. Visit this section every now and then learn more about upcoming enhancements to your favourite website!",
        date: "25 Jan 2024"
      },
      {
        title: "Tags/filters",
        desc: "Find all the latest article uploads in one place. Hover your cursor to view the card and click on it to read the article",
        date: "26 Jan 2024"
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<div class="new-features" data-astro-cid-ihbbp4rp> <h3 data-astro-cid-ihbbp4rp>New Features</h3> <div class="items" data-astro-cid-ihbbp4rp> ${updates.info.map((item) => {
    return renderTemplate`<div class="item" data-astro-cid-ihbbp4rp> <h4 data-astro-cid-ihbbp4rp>${item.title}</h4> <p class="desc" data-astro-cid-ihbbp4rp>${item.desc}</p> <p class="date" data-astro-cid-ihbbp4rp>${item.date}</p> </div>`;
  })} </div> </div> `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/index/NewFeatures.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const latest_posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  ).reverse().slice(0, 4);
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${renderComponent($$result, "SiteName", $$SiteName, { "data-astro-cid-j7pv25f6": true })}</h1> <p data-astro-cid-j7pv25f6>The only way to get better is to start acting better!</p> </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>What's New</h2> <ul data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Newest Articles</h3> <article class="articles-update-cards" data-astro-cid-j7pv25f6> ${latest_posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-j7pv25f6><div class="card" data-astro-cid-j7pv25f6><span class="article-title" data-astro-cid-j7pv25f6>${post.data.title}</span> <p class="desc" data-astro-cid-j7pv25f6>${post.data.description}</p> <p class="date" data-astro-cid-j7pv25f6>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })}</p> </div></a>`)} </article> <article class="articles-update-cards-m" data-astro-cid-j7pv25f6> ${latest_posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-j7pv25f6><div class="card" data-astro-cid-j7pv25f6><span class="article-title-m" data-astro-cid-j7pv25f6>${post.data.title}</span> <p class="desc-m" data-astro-cid-j7pv25f6>${post.data.description}</p> <p class="date-m" data-astro-cid-j7pv25f6>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })}</p> </div></a>`)} </article> <div class="n-features" data-astro-cid-j7pv25f6>${renderComponent($$result, "NewFeatures", $$NewFeatures, { "data-astro-cid-j7pv25f6": true })} </div> </ul> </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Long Term Goals</h2> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Making the site an interactive Platform(3-8 months plan)</li> <li data-astro-cid-j7pv25f6>Adding Communities to allow interaction between users(6 - 12 months plan) </li> </ul> </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Testimonials</h2> <blockquote data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>(No Testimonials yet, project is still in its early launch)</p> </blockquote> </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Get better Today!</h2> <p data-astro-cid-j7pv25f6>Ready to direct your efforts towards meaningful change? Explore our <span data-astro-cid-j7pv25f6>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`blog` })}</span>, and stay tuned for our upcoming content. We here to support you, offering practical guidance for your journey to personal growth. Be part a of LearnBetter!—where potential meets practicality.</p> </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Get in Touch</h2> <p data-astro-cid-j7pv25f6>Have a question or comment? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p> <p data-astro-cid-j7pv25f6>Please <b data-astro-cid-j7pv25f6>review</b> our content using this form: <a href="https://forms.gle/GTsujUFxCj6Dkd9HA" data-astro-cid-j7pv25f6>LearnBetter review form</a></p> <p data-astro-cid-j7pv25f6>For general inquiries, please email <a href="mailto:lapanemaela140403@gmail.com" data-astro-cid-j7pv25f6>learnbetter!inquiries@gmail.com</a></p> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$4 as i };
