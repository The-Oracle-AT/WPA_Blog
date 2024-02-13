<script lang="ts">
    import { getAuth, inMemoryPersistence } from "firebase/auth";
    import { onMount } from "svelte";
    import { app } from "../../firebase/client";

    let error: string;
    onMount(() => {
        const auth = getAuth(app);
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("User is signed in");
            } else {
                console.log("User is signed out");
            }
        });
    });


    const auth = getAuth(app);
    // This will prevent the browser from storing session data
    auth.setPersistence(inMemoryPersistence);
    async function submit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        try {
            const response = await fetch("/src/pages/api/auth/signin", {
                method: "POST",
                body: formData
            });
            const data= response;
        } catch (err:any) {
            error = err.message;
        }
    }

</script>

<form on:submit={submit}>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <button type="submit">Login</button>
    {#if error}
        <p>{error}</p>
    {/if}
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
    }
    button {
        padding: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #288cde;
        transition: all 0.2s ease-in-out;
        color: #fff;
        &:hover {
                    cursor: pointer;
                    transform: scale(1.1);
                }
        &:focus {
                outline: none;
                border: 1px solid #288cde;
            }
    }
    // .social-login {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
      
    //     .social {
    //         display: flex;
    //         justify-content: space-around;
    //         svg {
    //             width:100%;
    //             height:100%;
    //             fill: none;
    //             border-radius: 50%;
    //             box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                
    //         }
    //         button {
    //             width: 5rem;
    //             height: 5rem;
    //             margin: 1rem;
    //             border-radius: 50%;
    //             background-color: transparent;
                
    //         }
    //     }
    // }

</style>