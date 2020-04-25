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
        case CartActionTyles.CLEAR_ITEM_FROM_CART: 
        return {
            ...state,
            cartItems : state.cartItems.filter(item => item.id !== action.payload.id)
        }   
        default:
        return state;
    }
}

export default cartReducer;