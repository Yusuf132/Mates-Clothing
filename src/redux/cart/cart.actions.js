import {CartActionTyles} from './cart.types';
export const toggleCartHidden = user => ({
    type: CartActionTyles.TOGGLE_CART_HIDDEN
})
export const addItem = item => ({
    type: CartActionTyles.ADD_ITEM,
    payload:item
})