/**
 * Retrieves user data based on the provided session cookie.
 * @param {string} cookie - The session cookie string to verify and extract user data from.
 * @returns {Promise<any | null>} - A promise that resolves with the user data if authenticated, otherwise null.
 */

import { getAuth } from "firebase-admin/auth";
import { app } from "../server";

async function getUserData(cookie: string | null): Promise<any | null> {
    // If the cookie is missing, return null.
  if (!cookie) {
    return null;
  }
  const auth = getAuth(app);
  try {
    
    const decodedCookie = await auth.verifySessionCookie(cookie); // Verify the session cookie and decode it.
    const user = await auth.getUser(decodedCookie.uid); // Retrieve user data from the decoded cookie.
    return user;
  } catch (error) {
    console.error("Error while verifying session cookie:", error);
    return null;
  }
}
export default getUserData;