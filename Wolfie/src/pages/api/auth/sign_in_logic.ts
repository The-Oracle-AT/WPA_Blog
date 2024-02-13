    
import { getAuth, inMemoryPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase/client";

const auth = getAuth(app);
    // This will prevent the browser from storing session data
auth.setPersistence(inMemoryPersistence);
export let signInError = "";

const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (!email || !password) {
        signInError = "Missing email or password";
    return;
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    try {
        const response = await fetch("/api/auth/signin", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${idToken}`,
        },
        });
        if (response.redirected) {
            window.location.assign(response.url);
        }
    } catch (err: any) {
        signInError = err.message;
    }
});
    //Sign-in with google
//const googleSignin = document.querySelector("#google") as HTMLButtonElement;
//     googleSignin.addEventListener("click", async () => {
//const provider = new GoogleAuthProvider();
//const userCredential = await signInWithPopup(auth, provider);
//     const idToken = await userCredential.user.getIdToken();
//const res = await fetch("/api/auth/signin", {
//  headers: {
//    Authorization: `Bearer ${idToken}`,
//  },
//});

//if (res.redirected) {
//  window.location.assign(res.url);
//}
//   });
//const facebookSignin = document.querySelector("#facebook") as HTMLButtonElement;
//googleSignin.addEventListener("click", async () => {
//const provider = new FacebookAuthProvider();
//const userCredential = await signInWithPopup(auth, provider);
//const idToken = await userCredential.user.getIdToken();
//const res = await fetch("/api/auth/signin", {
//  headers: {
//    Authorization: `Bearer ${idToken}`,
//  },
//});

//if (res.redirected) {
//  window.location.assign(res.url);
//}
//});