import { Cart } from "../domain/cart/Cart.js";
import { CartItem } from "../domain/cart/CartItem.js";

export const cart = new Cart([
  new CartItem({ productId: "p1", qty: 2 }),
  new CartItem({ productId: "p3", qty: 1 }),
]);
