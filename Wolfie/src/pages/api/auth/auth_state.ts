import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/client';


onAuthStateChanged(auth, (user:any) => {
  if (user) {
    // User is signed in
    console.log('User is signed in');
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});