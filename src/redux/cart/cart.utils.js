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

export const removeItem = (cartProductsState, product) => {
    const isItemPresent = cartProductsState.find( item => item.id ===  product.id )
    if(isItemPresent.quantity === 1) {
        return cartProductsState.filter( item => item.id !== product.id)
    }
    return cartProductsState.map( item => item.id === product.id ? ({ ...item, quantity: item.quantity - 1  }) : item  )
}