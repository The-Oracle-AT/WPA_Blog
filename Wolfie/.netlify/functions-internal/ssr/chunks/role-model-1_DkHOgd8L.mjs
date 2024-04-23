import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_B5da40xO.mjs';
import { k as $$Image } from './pages/__CN0_D3ga.mjs';
import 'clsx';

const frontmatter = {
  "title": "Role Models: Good Guides, Not Goals",
  "description": "Learn about the value of having a role model in your life, any why you should have one.",
  "pubDate": "Feb 1 2024",
  "heroImage": "/blog-placeholder-2.jpg",
  "imageAlt": "Color image",
  "tags": ["Role model", "Guidance", "Mentorship"],
  "category": "Role Models",
  "link": "/blog/role-model-2/"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["We all need a role model or two. These are the people we often go to when we seek guidance or feeling down.\n", createVNode("small", {
        children: "\u201CShoot for the moon. Even if you miss, you will land amongst the stars\u201D-Vincent Norman"
      }), " ", createVNode("br", {})]
    }), "\n", createVNode("h2", {
      children: "Why have a role model?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "They show us that success is possible, and that we can achieve it too as a result we are willing to push further."
      }), "\n", createVNode(_components.li, {
        children: "Their experiences and triumphs are an inspiration, especially when the going gets hard."
      }), "\n", createVNode(_components.li, {
        children: "We draw courage from their stories."
      }), "\n", createVNode(_components.li, {
        children: "They give us a sense of direction by being a guide to us."
      }), "\n", createVNode(_components.li, {
        children: "With a sense of direction, comes a clear sense of purpose."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But if you\u2019ve been with us long enough, you know by now that you must be question whether these are good enough reasons or whether the role model is even worth having."
    }), "\n", createVNode("h2", {
      children: "Why We Do Not Aim to Be Our Role Models?"
    }), "\n", createVNode(_components.p, {
      children: "he thing about a role model is that they are like a limiter if you decide to pursue the tiresome task of trying to\nbe like them. You may like and idolize your favorite musician, actor, TV personality, etc., but the thing is, you can\nnever be your idol. There can only be one true Beyonc\xE9 or\nMichael Jackson, and it is extremely hard to try and replicate someone else\u2019s success. Imagine trying to be like Elon Musk, and you wish to have his life and his success.\nYou do not know what Elon went through to get what he has; you do not share the same experiences \u2014 even if you did,\nit is not from the same perspective. Let me emphasize this further: you are not genetically built like Elon. So don\u2019t waste your time trying to make someone else\u2019s success story your success story."
    }), "\n", createVNode(_components.p, {
      children: "But what you can do is aim for a more authentic goal and look to your idols for inspiration, aspiration, and guidance.\nLearn from the mistakes of those who came before you to get to your success with a bit more of a clear path than they\nhad. Your role models are pioneers who reached success with a lot of unknowns in their paths; many share their stories,\nand there is something to be learned from what they have to say. We advise you to find a role model or two but do not\ntry to be the person because that just beats the point of having one. You will limit yourself to becoming what you\nknow about the person, and it is not enough anyway, so don\u2019t try."
    }), "\n", createVNode("small", {
      children: "\u201CIf you know what you are doing then, it shouldn\u2019t take you too long to do it\u201D \u2013 W.P.A."
    }), "\n", createVNode("br", {}), "\n", createVNode("small", {
      children: "\u201DThe direction in which education starts a man, will determine his future in\nlife.\u201D \u2014 Plato "
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/role-model-1.mdx";
const file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/role-model-1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/role-model-1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
