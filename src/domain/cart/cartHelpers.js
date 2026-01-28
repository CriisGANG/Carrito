export function getQtyInCart(cartState, productId){
    if (!cartState || !Array.isArray(cartState.items)) {
        console.error("El carrito no es correcto");
    }
    return cartState.items.find((it) => it.productId === productId)?.qty ?? 0; // si existe devuelveme qty y si no existe devuelveme 0

}

export function getStockById(catalog, productId){
    if (!catalog || (typeof catalog.findById !== "function")) {
        console.error("El catalogo no es correcto")

    }
    return catalog.findById(productId)?.stock ?? 0;
}

export function canAddMore(cartState, catalog, productId){
    const qty = getQtyInCart(cartState, productId);
    const stock = getStockById(catalog, productId);

    return qty < stock;
}