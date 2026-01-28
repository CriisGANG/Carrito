import { CartItem } from "./CartItem.js";

export class Cart {
  constructor(items = []) {
    this.items = items; // CartItem[]
  }

  getItemCount() {
    return this.items.reduce((sum, it) => sum + it.qty, 0);
  }

  add(productId, qty = 1) {
    const existing = this.items.find((it) => it.productId === productId);

    const nextItems = existing
      ? this.items.map((it) =>
          it.productId !== productId ? it : it.withQty(it.qty + qty)
        )
      : [...this.items, new CartItem({ productId, qty })];

    return new Cart(nextItems);
  }

  updateQty(productId, qty) {
    const nextItems = this.items
      .map((it) => (it.productId !== productId ? it : it.withQty(qty)))
      .filter((it) => it.qty > 0);

    return new Cart(nextItems);
  }

  remove(productId) {
    return new Cart(this.items.filter((it) => it.productId !== productId));
  }
}
