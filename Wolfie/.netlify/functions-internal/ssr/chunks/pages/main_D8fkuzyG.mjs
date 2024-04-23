import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_B5da40xO.mjs';
import 'kleur/colors';
import { getAuth } from 'firebase-admin/auth';
import { a as app } from './__CN0_D3ga.mjs';
import { $ as $$DashboardLayout } from './account_Dl4JDtHK.mjs';

/** @returns {void} */
function noop() {}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

let userStore = writable({ name: "Lapain", email: "Emma@learnBetter.co.za" });

const $$Astro = createAstro("https://example.com");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("session")) {
    return Astro2.redirect("/signin");
  }
  const session = Astro2.cookies.get("session");
  if (!session) {
    console.log("No session found");
    return Astro2.redirect("/signin");
  }
  const decodedCookie = await auth.verifySessionCookie(session.value);
  const user = await auth.getUser(decodedCookie.uid);
  if (user) {
    userStore.set(
      {
        email: user.email,
        name: user.displayName
      }
    );
  } else {
    console.log("No user found");
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Dashboard", "description": "See your current progress and analytics" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Welcome ${user.displayName}</p> ${renderComponent($$result2, "Dashboard", null, { "uid": user.uid, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/components/dashboard/Dashboard.svelte", "client:component-export": "default" })} ` })} `;
}, "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/main.astro", void 0);

const $$file = "C:/Users/Lapane/Documents/Code/Astro/WPA_Blog/Wolfie/src/pages/dashboard/main.astro";
const $$url = "/dashboard/main";

export { $$Main as default, $$file as file, $$url as url };
