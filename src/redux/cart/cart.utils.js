export const addCartItem = (cartItems, addCartItem) => {
    let cartItemExists = cartItems.find(item => item.id === addCartItem.id);

    if(cartItemExists) {
        return cartItems.map(item => (
            item.id === addCartItem.id? {...item, quantity: item.quantity + 1}: item
        ))
    }

    return [...cartItems, {...addCartItem, quantity:1}];
} 