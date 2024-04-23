import { getAuth } from 'firebase-admin/auth';
import 'firebase/app';
import { a as app } from './__Cy41gj0q.mjs';

const errorCodesMapping = {
  "auth/email-already-in-use": "The email address is already in use by another account.",
  "auth/invalid-email": "The email address is not valid.",
  "auth/operation-not-allowed": "The email/password accounts are not enabled.",
  "auth/weak-password": "The password is too weak.",
  "auth/user-disabled": "The user account has been disabled.",
  "auth/user-not-found": "There is no user record corresponding account.",
  "auth/wrong-password": "The password is invalid.",
  "auth/invalid-verification-code": "The verification code is invalid.",
  "auth/invalid-verification-id": "The verification ID is invalid.",
  "auth/missing-verification-code": "The verification code is missing.",
  "auth/missing-verification-id": "The verification ID is missing.",
  "auth/code-expired": "The verification code has expired.",
  "auth/credential-already-in-use": "The email address is already in use by another account.",
  "auth/invalid-credential": "The credential is invalid.",
  "auth/invalid-disabled-field": "The user account has been disabled.",
  "auth/invalid-uid": "The provided uid is invalid.",
  "auth/missing-android-pkg-name": "An Android package name must be provided.",
  "auth/missing-continue-uri": "A continue URL must be provided.",
  "auth/missing-ios-bundle-id": "An iOS bundle ID must be provided.",
  "auth/missing-uid": "A uid must be provided.",
  "auth/operation-not-supported-in-this-environment": "This operation is not supported in the environment this application is running on.",
  "auth/phone-number-already-in-use": "The phone number is already in use by another account.",
  "auth/project-not-found": "No project found.",
  "auth/insufficient-permission": "Insufficient permission.",
  "auth/internal-error": "Internal error.",
  "auth/invalid-recipient-email": "The email address is not valid.",
  "auth/missing-or-invalid-nonce": "The nonce is missing or invalid.",
  "auth/missing-hash": "The hash is missing.",
  "auth/missing-oidc-issuer": "The OIDC issuer must be provided in the configuration.",
  "auth/missing-multi-factor-info": "The multi-factor info is missing."
};
function getFriendlyErrorMessage(error) {
  return errorCodesMapping[error.code] || error.message;
}

const GET = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      "No token found",
      { status: 401 }
    );
  }
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    const err = getFriendlyErrorMessage(error.code);
    return new Response(err, {
      status: 400
    });
  }
  const fiveDays = 60 * 60 * 24 * 5 * 1e3;
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays
    });
    cookies.set("session", sessionCookie, {
      path: "/"
    });
    console.log("Session cookie set");
    return redirect("/dashboard/main");
  } catch (error) {
    return new Response(
      "FAILED TO CREATE SESSION COOKIE",
      { status: 500 }
    );
  }
};

export { GET };
