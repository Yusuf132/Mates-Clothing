import {CartActionTyles} from './cart.types';
import {addCartItem} from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTyles.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTyles.ADD_ITEM: 
        return {
            ...state,
            cartItems : addCartItem(state.cartItems, action.payload)
        }    
        default:
        return state;
    }
}

export default cartReducer;