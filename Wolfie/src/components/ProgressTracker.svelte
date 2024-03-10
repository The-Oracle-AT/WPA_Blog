<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/firestore';
  import { onMount } from 'svelte';

  export let title;

  onMount(() => {
    const user = firebase.auth().currentUser;

    if (user) {
      const userDocRef = firebase.firestore().collection('users').doc(user.uid);

      window.addEventListener('scroll', () => {
        const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

        if (progress >= 90) {
          userDocRef.get().then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              const points = userData.points || 0;
              const progress = userData.progress || {};

              if (!progress[title]) {
                userDocRef.update({
                  points: points + 10,
                  [`progress.${title}`]: true,
                });
              }
            }
          });
        }
      });
    }
  });
</script>