export class CartItem {
  constructor({ productId, qty }) {
    this.productId = productId;
    this.qty = Number(qty);
  }

  withQty(newQty) {
    return new CartItem({ productId: this.productId, qty: newQty });
  }
}
