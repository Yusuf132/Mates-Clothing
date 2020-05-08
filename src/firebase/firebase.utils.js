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

}

export const  addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}
firebase.initializeApp(config);

//For Google Authentication
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//provider for google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//Pop up the promt to select the google account
googleProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
