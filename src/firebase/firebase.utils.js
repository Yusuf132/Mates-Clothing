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
