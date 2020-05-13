export const addCartItem = (cartItems, addCartItem) => {
    let cartItemExists = cartItems.find(item => item.id === addCartItem.id);

    if(cartItemExists) {
        return cartItems.map(item => (
            item.id === addCartItem.id? {...item, quantity: item.quantity + 1}: item
        ))
    }

    return [...cartItems, {...addCartItem, quantity:1}];
} 

export const removeCartItem = (cartItems, removeCartItem) => {
    let existingCartItem = cartItems.find(item => item.id === removeCartItem.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== removeCartItem.id)
    }
    return cartItems.map(item => 
        item.id === removeCartItem.id? {...item, quantity: item.quantity - 1}: item
    );
} 