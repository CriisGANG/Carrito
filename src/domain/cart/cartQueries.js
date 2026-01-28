/**
 * @param {import("../product/Catalog.js").Catalog} catalog
 * @param {import("./Cart.js").Cart} cart
 */
export function getCartLines(catalog, cart) {
  return cart.items.map((it) => {
    const product = catalog.findById(it.productId);

    return {
      productId: it.productId,
      qty: it.qty,
      productName: product?.name ?? "(No existe)",
      unitPrice: product?.price ?? 0,
      lineTotal: (product?.price ?? 0) * it.qty,
    };
  });
}

export function getCartTotal(catalog, cart) {
  return getCartLines(catalog, cart).reduce((sum, line) => sum + line.lineTotal, 0);
}
