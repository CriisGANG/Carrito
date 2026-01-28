export class Catalog {
  constructor(products = []) {
    this.products = products; // Product[]
  }

  findById(productId) {
    return this.products.find((p) => p.id === productId);
  }

  search(query) {
    const q = query.trim().toLowerCase();
    return this.products.filter((p) => p.name.toLowerCase().includes(q));
  }
}
