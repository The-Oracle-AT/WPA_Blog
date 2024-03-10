/**
 * Initiates a Google sign-in process using Firebase Authentication.
 * It authenticates the user, retrieves an ID token, and then attempts to
 * establish a session with the server using the ID token. If the server responds
 * with a redirection, the browser will navigate to the provided URL.
 *
 * @throws Will throw an error if the Google sign-in process or the server session setup fails.
 */
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../client"; // Import the Firebase app instance from the client module.


async function handleGoogleSignIn() {
    const auth = getAuth( app ); // Get the Firebase Auth instance from the server.

    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider); // Initiate the Google sign-in process.

        const idToken = await userCredential.user.getIdToken(); // Retrieve the ID token from the user credential.

        // Send the ID token to the server to establish a session.
        const response = await fetch("/api/auth/signin", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${idToken}`, // Attach the ID token to the request.
            },
        })
        if (response.redirected) {
            window.location.assign(response.url); // Redirect the browser to the server's response URL.
        }
    } catch (error) {
        console.error("Error during Google sign-in:", error);
        throw new Error("Google sign-in failed.");
    } 
}
export default handleGoogleSignIn;
