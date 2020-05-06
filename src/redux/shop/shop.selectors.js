import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections? Object.keys(collections).map(item => collections[item]): []
)

export const selectCollection = (collectionUrlParams) => 
createSelector(
    [selectShopCollections],
    (collections) => collections? collections[collectionUrlParams]: null
)

export const selectIsCollectionFetching =  
createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

export const  selectIsCollectionLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
)