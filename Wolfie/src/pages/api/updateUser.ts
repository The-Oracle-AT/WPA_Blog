/**
 * server-side code for updating user data
 */


import type { APIRoute } from "astro";
import getUserData from "../../firebase/auth/getUserData";
import updateUserData from "../../firebase/auth/updateUserData";

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const sessionCookie = cookies.get("session")?.value ?? null;
        const user = await getUserData(sessionCookie);

        if (!user) {
            return new Response(JSON.stringify({ message: "User not found, unauthorized access" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        // Get the user data to update from the request body
        const updates = await request.json();
        if(!updates){
            return new Response(JSON.stringify({ message: "No data to update" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        // Update the user data
        const updatedUserRecord = await updateUserData(user.uid, updates);
        return new Response(JSON.stringify({success: true, data: updatedUserRecord}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error("Error updating user data:", error);
        let errorMessage = "Internal server error";
        let statusCode = 500;
        if (error instanceof Error) {
            errorMessage = error.message;
            statusCode = (error as { statusCode?: number }).statusCode || 500;
        }
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: statusCode,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

}