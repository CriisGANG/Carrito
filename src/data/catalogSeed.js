import { Product } from "../domain/product/Product.js";
import { Catalog } from "../domain/product/Catalog.js";

export const products = [
  new Product({ id: "p1", name: "Camiseta", price: 12.99, stock: 10 }),
  new Product({ id: "p2", name: "Taza", price: 8.5, stock: 0 }),
  new Product({ id: "p3", name: "Gorra", price: 9.99, stock: 7 }),
];

export const catalog = new Catalog(products);
