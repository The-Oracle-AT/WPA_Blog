import type { UserRecord } from "firebase-admin/auth";
import { getAuth } from "firebase-admin/auth";

/**
 * Updates the data for a specified user.
 *
 * @param {string} uid - The user ID of the Firebase user.
 * @param {UserUpdates} updates - An object containing the data to update.
 * @returns {Promise<UserRecord>} - A promise that resolves with the updated user record.
 */

type UserUpdates = {
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  //TODO: Add more stuff that you want to update
};

async function updateUserData(
  uid: string,
  updates: UserUpdates
): Promise<UserRecord> {
  const auth = getAuth();

  if (updates?.email) {
    // When you change email you need to set emailVerified to true
    updates.emailVerified = false;
  }

  // Perform the update with the modified updates object.
  return await auth.updateUser(uid, updates);
}

export default updateUserData;