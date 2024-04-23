import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { a as app } from './__CN0_D3ga.mjs';

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

async function updateUserData(uid, updates) {
  const auth = getAuth();
  if (updates?.email) {
    updates.emailVerified = false;
  }
  return await auth.updateUser(uid, updates);
}

const db = getFirestore(app);
const usersRef = db.collection("users");
const POST = async ({ params, request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const username = formData.get("username")?.toString();
  const institution = formData.get("institution")?.toString();
  if (!name || !username) {
    return new Response("Missing required fields.", {
      status: 400
    });
  }
  if (!params.id) {
    return new Response("Something went wrong, User not found. Try these: \n Refresh last page. \n Sign-out then sign-in and try again.", {
      status: 404
    });
  }
  try {
    const uid = params.id.replace("$", "");
    await usersRef.doc(uid).update({
      name,
      username,
      institution
    });
    try {
      await updateUserData(uid, {
        displayName: username.concat(`_${name}_${institution}`)
      });
    } catch (error) {
      console.log(error);
      return new Response(`"Something went wrong" ${error}`, {
        status: 500
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(`"Something went wrong" ${error}`, {
      status: 500
    });
  }
  return redirect("/dashboard/main");
};

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a, updateUserData as u };
