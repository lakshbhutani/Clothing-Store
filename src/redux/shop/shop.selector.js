import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections =  createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
)

export const selectCollectionItem = collectionIdParam  => createSelector(
    [selectCollections],
    // collections => collections.find( item => item.id === COLLECTION_ID_MAP[collectionIdParam])
    collections => (collections ?  collections[collectionIdParam] : null ) 
)

export const selectIsloading = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)