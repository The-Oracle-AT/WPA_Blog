import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_B5da40xO.mjs';
import { k as $$Image } from './pages/__CN0_D3ga.mjs';
import 'clsx';

const frontmatter = {
  "title": "Finding Your Study Method: Beyond The Book",
  "description": "More ways to enhance your study sessions",
  "pubDate": "Jan 20 2024",
  "heroImage": "/blog-placeholder-4.jpg",
  "imageAlt": "Color image",
  "tags": ["Study", "Learning"],
  "category": "Study",
  "link": "/blog/finding-your-study-method/"
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "your-brain-wants-to-have-fun",
    "text": "Your Brain Wants to Have fun."
  }, {
    "depth": 4,
    "slug": "take-sleep-seriously",
    "text": "Take sleep seriously."
  }, {
    "depth": 4,
    "slug": "take-care-of-your-body",
    "text": "Take Care of Your Body"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The road to becoming an A student isn\u2019t just about studying, you must also keep your mind and body in the best shape they can possibly be in."
    }), "\n", createVNode(_components.h4, {
      id: "your-brain-wants-to-have-fun",
      children: "Your Brain Wants to Have fun."
    }), "\n", createVNode(_components.p, {
      children: "Study in ways that are fun for you. This keeps you positively motivated and you will not feel that studying is as much of a drag as it used to be (Some fun ways of studying include, playing your favorite music while you practice\nsolving equations, moving around the room while reading a book, acting out the characters roles\nin a story you are reading, etc.)."
    }), "\n", createVNode(_components.h4, {
      id: "take-sleep-seriously",
      children: "Take sleep seriously."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memory consolidation."
        }), "\nDuring sleep your brain consolidates and orders the information you\u2019ve learned throughout the day. This helps information stored in our brains to move from short-term memory to long-term memory."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Improved focus and attention."
        }), "\nGetting enough rest allows you to concentrate and pay attention a lot better than when you\naren\u2019t well rested. You are better off sleeping than trying to push yourself for little outcome."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Emotional regulation."
        }), "\nSleep helps regulate emotions, hormones and reduces stress, anxiety and irritability. Having\ncontrol over your emotions and stability you will not be swayed by negative emotions as you will\nhave greater resilience."]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "\u201DSleep is the golden chain that ties health and our bodies together.\u201D - Thomas Dekker"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problem- solving and decision making"
        }), ".\nSleep deprivation impairs judgement and promotes poor critical thinking ability. When you are\nwell rested you can make better decisions and think much more efficiently than when not\nrested."]
      }), "\n"]
    }), "\n", createVNode("small", {
      children: "\u201DStudy hard what interests you the most in the most undisciplined, irreverent and original manner\npossible.\u201D - Richard P. Feynman"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h4, {
      id: "take-care-of-your-body",
      children: "Take Care of Your Body"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "To have and keep a healthy mind you must be in good health, because a healthy and optimized\nmind requires a healthy and looked after body."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Be mindful of what you eat."
        }), "\nOther than the nutrition your body requires, your mind too is influenced by the food you eat.\nEating healthy promotes a healthy body and a healthy mind. Eating junk is fun and all but what\nyou do not realize is that a heavy junk-filled meal can make you feel sleepy and tired which\nreduces your critical thinking capability and diminishes your concentration and attention."]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Exercise."
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Don\u2019t Force It."
        }), " If you are unable to study and aren\u2019t under any pressure to, don\u2019t! You are better off having fun\nand studying when nothing is holding you back.\nRemove All Distractions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Limit screen time"
        }), " \u2013 especially when you are about to sleep or study. Now more than ever we are bombarded with social media feeds and as fun as these short Tik-Tok videos are to watch, every time you visit Tik-Tok you are practicing how to limit you attention span to smaller time periods."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manage stress and anxiety"
        }), " \u2013 do not be swayed by negative emotions or thoughts. You must\nhave power over your mind and some control over the extent to which your emotions distract\nyou. (You may not be able to do this now, but anyone can gain control over their mental\nfacilities with practice)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["It cannot be stressed enough how these small changes can enhance the quality of your life greatly. The internet and social media are powerful tools when leveraged properly. You can learn just about anything you can imagine. So instead of doom-scrolling learn a new skill or read about that topic you\u2019ve been putting off.\n", createVNode("br", {}), createVNode("small", {
        children: "\u201CA sound mind in a sound body.\u201D \u2013 Aristotle"
      })]
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
const url = "src/content/blog/Finding%20your%20study%20Method%202.mdx";
const file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/Finding your study Method 2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/content/blog/Finding your study Method 2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
