
<script lang="ts">
    import { onMount } from "svelte";
    import type { User } from "../../pages/dashboard/types";
    
    export let uid: string;
    export let user: User;
    $: name = user?.name || '';
    $: username = user?.username || '';
    $: institution = user?.institution || "Insitution";
    $: editable = true;
    
    let errorMessage = '';
    let loading = false;
    let successMessage = '';
    $: hasChanged = name !== user.name || username !== user.username || institution !== user.institution  ;
    onMount(()=> {
      editable = true;
    })

    const save = (e:Event) => {
      e.preventDefault();
      editable = false

    }


</script>

<div class="profile">
    <form method="post" action="/api/database/user/${uid}">
        <label for="name">
        Name:{ name }
        <input bind:value={name} placeholder="Name" disabled={!editable} type="text" name="name">
        </label>
        <label for="username">
        Username:
        <input bind:value="{username}" placeholder="Username" disabled={!editable} type="text" name="username">
        </label>
        <label for="institution">
        School/Company:
        <input bind:value={institution} placeholder="Name of your institution" disabled={!editable} type="text" name="institution">
        </label>
        <button on:click={save}> {editable ? 'Save' : 'Edit'}</button>
    </form>
    <section class="badges">
        <h2>Badges</h2>
        <img src="/icons/achievements/achievement-award-medal-svgrepo-com.svg" alt="Badge 1" style="height: 50px; width:50px;">
        <img src="/icons/achievements/achievement-businessman-expertise-svgrepo-com.svg" alt="Badge 2">
        <img src="/icons/achievements/achievement-challenge-medal-svgrepo-com.svg" alt="Badge 3">
    </section>
  </div>

  <style lang="scss">
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
      form {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
        width: 100%;
      }
    }
    // #avatar {
    //   width: 100px;
    //   height: 100px;
    //   border-radius: 50%;
    // }
    input {
      width: 100%;
    }
    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
    }
    /*
    textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        min-height: 10rem;
        min-width: 80svw;
        width: 100%;
    }
    */
    .badges {
      img {
        width: 50px;
        height: 50px;
      }

    }
  </style>