import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config =
{
    apiKey: "AIzaSyCiC3VNVHLTgxubeBno39PiB6Ya_-oJFUo",
    authDomain: "mates-clothing.firebaseapp.com",
    databaseURL: "https://mates-clothing.firebaseio.com",
    projectId: "mates-clothing",
    storageBucket: "mates-clothing.appspot.com",
    messagingSenderId: "53323034575",
    appId: "1:53323034575:web:ba8c0424c2c732c794acba"
};

export const createUserProfileDocument= async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )

        } catch(error) {
            console.log('error creating user', error.message)
        }
        
    }
    return userRef;

}
firebase.initializeApp(config);

//For Google Authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//provider for google auth
const provider = new firebase.auth.GoogleAuthProvider();

//Pop up the promt to select the google account
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;