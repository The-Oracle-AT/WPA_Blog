import type { APIRoute } from "astro";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user:any) => {
    if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        return redirect("/signin");
    } else {
        const uid = user.uid || "UID";
        const displayName = user.displayName || "Display Name";
        const email = user.email || "Email";
        user.set({UID: uid,name:  displayName, email: email});
        
    }
    });
    



    return redirect("/dashboard");
}