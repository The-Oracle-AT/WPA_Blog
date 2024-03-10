/**
 * Translates Firebase error codes into user-friendly messages.
 * @param {FirebaseError} error - The error object from Firebase with `code` and `message` properties.
 * @returns {string} - A user-friendly error message.
 */

import { FirebaseError } from 'firebase/app';


type ErrorCodesMapping = {
    [key: string]: string;
    };

const errorCodesMapping: ErrorCodesMapping = {
    'auth/email-already-in-use': 'The email address is already in use by another account.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/operation-not-allowed': 'The email/password accounts are not enabled.',
    'auth/weak-password': 'The password is too weak.',
    'auth/user-disabled': 'The user account has been disabled.',
    'auth/user-not-found': 'There is no user record corresponding account.',
    'auth/wrong-password': 'The password is invalid.',
    'auth/invalid-verification-code': 'The verification code is invalid.',
    'auth/invalid-verification-id': 'The verification ID is invalid.',
    'auth/missing-verification-code': 'The verification code is missing.',
    'auth/missing-verification-id': 'The verification ID is missing.',
    'auth/code-expired': 'The verification code has expired.',
    'auth/credential-already-in-use': 'The email address is already in use by another account.',
    'auth/invalid-credential': 'The credential is invalid.',
    'auth/invalid-disabled-field': 'The user account has been disabled.',
    'auth/invalid-uid': 'The provided uid is invalid.',
    'auth/missing-android-pkg-name': 'An Android package name must be provided.',
    'auth/missing-continue-uri': 'A continue URL must be provided.',
    'auth/missing-ios-bundle-id': 'An iOS bundle ID must be provided.',
    'auth/missing-uid': 'A uid must be provided.',
    'auth/operation-not-supported-in-this-environment': 'This operation is not supported in the environment this application is running on.',
    'auth/phone-number-already-in-use': 'The phone number is already in use by another account.',
    'auth/project-not-found': 'No project found.',
    'auth/insufficient-permission': 'Insufficient permission.',
    'auth/internal-error': 'Internal error.',
    'auth/invalid-recipient-email': 'The email address is not valid.',
    'auth/missing-or-invalid-nonce': 'The nonce is missing or invalid.',
    'auth/missing-hash': 'The hash is missing.',
    'auth/missing-oidc-issuer': 'The OIDC issuer must be provided in the configuration.',
    'auth/missing-multi-factor-info': 'The multi-factor info is missing.',
}
function getFriendlyErrorMessage(error: FirebaseError): string {
    return errorCodesMapping[error.code] || error.message;
}
export default getFriendlyErrorMessage;
