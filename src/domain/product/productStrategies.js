export const sortStrategies = {
  priceAsc: (arr) => [...arr].sort((a, b) => a.price - b.price),
  priceDesc: (arr) => [...arr].sort((a, b) => b.price - a.price),
  nameAsc: (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name)),
};

export function getVisibleProducts(catalog, sortKey) {
  const fn = sortStrategies[sortKey] ?? sortStrategies.nameAsc;
  return fn(catalog.products);
}
