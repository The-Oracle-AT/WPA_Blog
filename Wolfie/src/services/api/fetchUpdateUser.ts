// This is a service function that makes a POST request to the server to update user data

async function fetchUpdateUser(userData: object) {
    const response = await fetch("/api/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // Make sure to send the user data as JSON
    });
    const responseData = await response.json();
  
    if (!response.ok) {
      throw new Error(
        responseData.error ||
          "Failed to update user. Server responded with status: ${response.status}"
      );
    }
  
    return responseData.data; // Return the JSON data
  }
  
  export default fetchUpdateUser;