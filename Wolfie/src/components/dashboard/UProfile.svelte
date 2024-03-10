
<script lang="ts">
    import type { User } from "firebase/auth";
    import getFriendlyErrorMessage from "../../firebase/auth/getFriendlyErrorMessage";
    import fetchUpdateUser from "../../services/api/fetchUpdateUser";

    export let user: User;
    export let name = user?.displayName || '';
    export let username = user?.email || '';
    
    export let bio = 'Captain Wize is the LearnBetter! mascott and your friendly compnions as you learn and grow. I am here to help you on your journey to success';
    export let schoolOrCompany = '';
    export let editable = false;
    
    let errorMessage = '';
    let loading = false;
    let successMessage = '';
    $: hasChanged = name !== user.displayName || username !== user.email || bio !== '' || schoolOrCompany !== '';

    //construct the user object with the updated values
    function getAccountUpdates() {
      let updates = {};
      if (name !== user.displayName) {
        updates = {...updates, displayName: name};
      }
      if (username !== user.email) {
        updates = {...updates, email: username};
      }
      return updates;
      
    }
    async function updateAccountDetails(e:Event) {
      e.preventDefault();
      loading = true;
      successMessage = '';
      errorMessage = '';
      const updates = getAccountUpdates();

      try {
        const updatedUser = await fetchUpdateUser(updates);
        console.log(updatedUser);
        successMessage = 'Account details updated successfully';
        user = {...user, ...updatedUser};
      } catch (error: any) {
        errorMessage = getFriendlyErrorMessage(error);
      } finally {
        loading = false;
      }
    }    

      
    


const selectPic = (e:Event) => {
  e.preventDefault();
  const avatar = document.getElementById('avatarInput') as HTMLInputElement;
  if (e.target instanceof HTMLInputElement && e.target.files !== null) {
    avatar.src = URL.createObjectURL(e.target.files[0]);
  }

};
const activatePicSelector = (e: Event) => {
  const avatar = document.getElementById('avatarInput') as HTMLInputElement;
  avatar.click();
}
const save = (e:Event) => {
  e.preventDefault();
  
  if (editable) {
    updateAccountDetails(e);
  }
  editable = !editable;
  console.log(editable);
};

</script>

<div class="profile">
    <form>
        <img src="avatar.jpg" alt="User avatar" id="avatar">
        <input type="file" id="avatarInput" style="display: none;" on:change="{selectPic}">
        <button on:click="{activatePicSelector}" disabled ={!editable}>Change Avatar</button>
        <label>
        Name: {user.displayName}
        <input bind:value={name} placeholder="Name" disabled={!editable} type="text">
        </label>
        <label>
        Username:
        <input bind:value="{username}" placeholder="Username" disabled={!editable} type="text">
        </label>
        <label>
        Bio: 
        <textarea bind:value={bio} placeholder="Bio" disabled={!editable}></textarea>
        </label>
        <label>
        School/Company:
        <input bind:value={schoolOrCompany} placeholder="School or Company" disabled={!editable} type="text">
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
    #avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    input, textarea {
      width: 100%;
    }
    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
    }
    textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        min-height: 10rem;
        min-width: 80svw;
    }
    .badges {
      img {
        width: 50px;
        height: 50px;
      }

    }
  </style>