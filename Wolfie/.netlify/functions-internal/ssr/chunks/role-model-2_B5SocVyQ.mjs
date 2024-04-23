import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_B5da40xO.mjs';
import { k as $$Image } from './pages/__Cy41gj0q.mjs';
import 'clsx';

const frontmatter = {
  "title": "Role Models: Get One",
  "description": "Having the right role model is a good way to get inspiration and guidance.",
  "pubDate": "Feb 2 2024",
  "heroImage": "/blog-placeholder-2.jpg",
  "imageAlt": "Color image",
  "tags": ["Role model", "Guidance", "Mentorship", "Alter-ego"],
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
    children: [createVNode("h2", {
      children: "Choosing A Role Model"
    }), "\n", createVNode(_components.p, {
      children: "We do not often choose role models actively; they touch our hearts with their words or actions, and the next thing you know, they are a source of inspiration. But you can deliberately pick a role model of your choice (though after assessing whether they are the role model you want; everything happens as the former case.)."
    }), "\n", createVNode("h2", {
      children: "Types of Role Model Choices"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode("b", {
            children: "Path Related"
          }), ": Choosing a role model based on the relation between your careers. Often a role model is chosen this way.\nThis role model achieved a goal closely related to what you want to achieve, like a computer enthusiast having Bill Gates,\nLinus Torvalds, or Mark Zuckerberg as a role model, an aspiring professional soccer player having Messi as a role model,\nan aspiring rapper looking to J. Cole or A.K.A for inspiration. These are the easiest to pick."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode("b", {
            children: "Goal Related"
          }), ": These are role models we often get inspiration or words of wisdom from; they are often doing\nsomething different from what you want to achieve, but by listening to their story, you can relate or draw inspiration\nto pursue your goal. A good example would be a child drawing inspiration from a family member\u2019s struggle (usually parents)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode("b", {
            children: "Unrelated"
          }), ": This is that role model that you know you can never become, does nothing related to what you do\nyet when you look to them you cannot help but be moved. These role models are often based on fictional characters,\nlike superheroes, supernatural beings, and princesses. These are often inspiration that can be drawn is limited only\nto the possesso\u2019s mind. This is the ", createVNode("b", {
            children: createVNode("i", {
              children: "Alter-Ego "
            })
          }), "origin."]
        }), "\n"]
      }), "\n"]
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
const url = "src/content/blog/role-model-2.mdx";
const file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/role-model-2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/role-model-2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
