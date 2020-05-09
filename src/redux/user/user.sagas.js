import {takeLatest, all,  call, put} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';

import {signInSuccess, signInFailure, signOutSuccess, signOutFailure} from './user.actions';

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        put(signInFailure(error));
    }

} 
export function* getSnapshotFromUserAuth (userAuth, additionalData){
    try {
        const userRef = yield call(
          createUserProfileDocument,
          userAuth,
          additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
      } catch (error) {
        yield put(signInFailure(error));
      }

}
export function* signInWithEMAIL({payload:{email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        put(signInFailure(error));
    }
}
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        put(signOutFailure(error));
    }
}
export function* onGoogleSignIn() {
    yield takeLatest(UserActionTypes.G00GLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignIn() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEMAIL)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(isUserAuthenticated),
        call(onSignOutStart)
    ])
}