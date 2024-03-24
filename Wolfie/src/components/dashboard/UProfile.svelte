
<script lang="ts">
    
        
    export let uid: string;
    export let currentUserData:any;
    let name = currentUserData.name || "";
    let username = currentUserData.username;
    let institution = currentUserData.institution;
    $: editable = true;
    $: edited = name != currentUserData.name || username != currentUserData.username || institution != currentUserData.institution;

    

    const save = (e:Event) => {

      editable = false

    }
    console.log(currentUserData)


</script>

<div class="profile">
    <form method="post" action="/api/database/user/${uid}">
        <label>
        Name: { name }
        <input bind:value={name} placeholder="Name" disabled={!editable} type="text" name="name" autocomplete="name">
        </label>
        <label>
        Username: { username }
        <input bind:value={username} placeholder="Username" disabled={!editable} type="text" name="username" autocomplete="additional-name">
        </label>
        <label>
        School/Company: { institution }
        <input bind:value={institution} placeholder="Name of your institution" disabled={!editable} type="text" name="institution">
        </label>
        <button> Save </button>
    </form>
    <section class="badges" >
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
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        opacity: .8;
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