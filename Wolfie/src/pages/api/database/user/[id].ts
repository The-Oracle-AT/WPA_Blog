import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const usersRef = db.collection("users");
export const POST: APIRoute = async ({ params, request, redirect}) => {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const username = formData.get("username")?.toString();
    const institution = formData.get("institution")?.toString();

    if(!name || !username) {
        return new Response("Missing required fields.", {
            status: 400,
        });
    }
    if(!params.id) {
        return new Response("Something went wrong, User not found. Try these: \n Refresh last page. \n Sign-out then sign-in and try again.", {
            status: 404,
        });
    }
    try {
        const uid = (params.id).replace('$', "")//remove dollar sign from params
        await usersRef.doc(uid).update({
            name: name,
            username: username,
            institution: institution,
        });
    } catch (error) {
        console.log(error)
        return new Response (`"Something went wrong" ${error}`, {
            status: 500,
        })
        
    }
    return redirect("/dashboard/main")
}