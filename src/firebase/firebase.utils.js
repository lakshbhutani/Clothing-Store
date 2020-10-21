import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDLS6TjyU6eZnr5CyZSsveEF-hQOWLpb4o",
    authDomain: "crown-db-4c294.firebaseapp.com",
    databaseURL: "https://crown-db-4c294.firebaseio.com",
    projectId: "crown-db-4c294",
    storageBucket: "crown-db-4c294.appspot.com",
    messagingSenderId: "483452441900",
    appId: "1:483452441900:web:e98e34cfe0698b14cf8889",
    measurementId: "G-6M9S3SW7V1"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;