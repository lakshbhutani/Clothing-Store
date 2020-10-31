import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectiionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIIONS_START,
})

export const fetchCollectiionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIIONS_SUCCESS,
    payload: collectionsMap,
})

export const fetchCollectiionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectiionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        
        dispatch(fetchCollectiionsStart())

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectiionsSuccess(collectionsMap))
        }).catch(err=> dispatch(fetchCollectiionsFailure(err.message)) );
    }
}