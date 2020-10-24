export const addItem = (cartProductsState, product) => {
    const isItemPresent = cartProductsState.find( item => product.id === item.id);
    if(isItemPresent) {
        return cartProductsState.map( item => {
            if(item.id === product.id) {
                return { ...product, quantity: item.quantity + 1 }
            } else {
                return item
            }
        })
    }   
    return [ ...cartProductsState, { ...product, quantity: 1} ]
}       