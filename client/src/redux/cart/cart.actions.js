import {CartActionTyles} from './cart.types';
export const toggleCartHidden = user => ({
    type: CartActionTyles.TOGGLE_CART_HIDDEN
})
export const addItem = item => ({
    type: CartActionTyles.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item => ({
    type: CartActionTyles.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = item => ({
    type: CartActionTyles.REMOVE_ITEM,
    payload:item
})