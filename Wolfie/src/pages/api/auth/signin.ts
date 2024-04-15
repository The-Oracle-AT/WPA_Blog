import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import getFriendlyErrorMessage from "../../../firebase/auth/getFriendlyErrorMessage";
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
    const err = getFriendlyErrorMessage(error.code);
    return new Response(err, {
      status: 400
    })

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
    return redirect("/dashboard/main");
  } catch (error: any) {
    return new Response(
      "FAILED TO CREATE SESSION COOKIE",
      { status: 500 }
    );
  }
};