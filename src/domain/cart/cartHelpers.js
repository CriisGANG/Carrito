export function getQtyInCart(cartState, productId){
    return cartState.items.find((it) => it.productId === productId)?.qty ?? 0; // si existe devuelveme qty y si no existe devuelveme 0

}

export function getStockById(catalog, productId){
    return catalog.findById(productId)?.stock ?? 0;
}

export function canAddMore(cartState, catalog, productId){
    const qty = getQtyInCart(cartState, productId);
    const stock = getStockById(catalog, productId);

    return qty < stock;
}