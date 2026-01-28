export class Product {
  constructor({ id, name, price, stock = 0 }) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.stock = Number(stock);
  }

  isInStock() {
    return this.stock > 0;
  }

  formatPrice() {
    return `${this.price.toFixed(2)} €`;
  }
}
