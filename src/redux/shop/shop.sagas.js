import {takeEvery, call, put} from 'redux-saga/effects';

import {ShopActionTypes} from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {fetchCollectionSuccess, fetchCollectionFailure} from './shop.actions';


export function* fetchCollectionsStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
             snapshot
        );
        yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch (error) {
       yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}

// export function* fetchCollectionSuccess(collectionMap) {
//     yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, fetchCollectionsStartAsync)
// }