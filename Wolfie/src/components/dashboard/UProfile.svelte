
<script>
    $: name = 'LearnBetter User';
    export let username = 'Captain Wize';
    export let bio = 'Captain Wize is the LearnBetter! mascott and your friendly compnions as you learn and grow. I am here to help you on your journey to success';
    export let schoolOrCompany = '';
    export let editable = true;

const toggleEditable = () => {
  editable = !editable;
  console.log(editable);

};
</script>

<div class="profile">
    <form>
        <img src="avatar.jpg" alt="User avatar" id="avatar">
        <input type="file" id="avatarInput" style="display: none;" on:change="{(e) => document.getElementById('avatar').src = URL.createObjectURL(e.target.files[0])}">
        <button on:click="{() => document.getElementById('avatarInput').click()}" disabled ={!editable}>Change Avatar</button>
        <label>
        Name: 
        <input bind:value={name} placeholder="Name" disabled={!editable} type="text">
        </label>
        <label>
        Username:
        <input bind:value="{username}" placeholder="Username" disabled={!editable} type="text">
        </label>
        <label>
        Bio: 
        <textarea bind:value={bio} placeholder="Bio" disabled={!editable} type="text"></textarea>
        </label>
        <label>
        School/Company:
        <input bind:value={schoolOrCompany} placeholder="School or Company" disabled={!editable} type="text">
        </label>
        <button on:click={toggleEditable}> {editable ? 'Save' : 'Edit'}</button>
    </form>
    <section class="badges">
        <h2>Badges</h2>
        <img src="badge1.jpg" alt="Badge 1">
        <img src="badge2.jpg" alt="Badge 2">
        <img src="badge3.jpg" alt="Badge 3">

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
  </style>