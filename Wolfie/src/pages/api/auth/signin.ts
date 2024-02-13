import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from '../../../firebase/server';


export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);


  /* Get token from request headers */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      "No token found",
      { status: 401 }
    );
  }

  /* Verify id token */
  try {
    await auth.verifyIdToken(idToken);
  } catch (error: any) {
    switch (error.code) {
      case "auth/argument-error":
      case "auth/invalid-id-token":
      case "auth/id-token-expired":
      case "auth/user-disable":
      case "auth/user-not-found":
        return new Response(
          "Token expired or invalid",
          { status: 401 }
        );
      default:
        return new Response(
          "Internal error, please try again.",
          { status: 500 }
        );

    }
  }

  /* Create and set session cookie */
  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    cookies.set("session", sessionCookie, {
      path: "/",
    });
    console.log("Session cookie set")
    return redirect("/dashboard");
  } catch (error: any) {
    return new Response(
      "FAILED TO CREATE SESSION COOKIE",
      { status: 500 }
    );
  }
};