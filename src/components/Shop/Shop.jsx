import styles from "./Shop.module.css";

import { catalog } from "../../data/catalogSeed.js";
import { cart } from "../../data/cartSeed.js";
import { getCartLines, getCartTotal } from "../../domain/cart/cartQueries.js";
import { getVisibleProducts } from "../../domain/product/productStrategies.js";
import ProductList from "../ProductList/ProductList.jsx";
import CartView from "../CartView/CartView.jsx";
import { useState } from "react";
import { canAddMore, getQtyInCart } from "../../domain/cart/cartHelpers.js";


function Shop() {

  const [currentCart, setCurrentCart] = useState(cart);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortkey, setSortkey] = useState("nameAsc");

  const SORT_OPTIONS = [
    {value: "nameAsc", label: "Nom (A -> Z)"},
    {value: "priceAsc", label: "Preu (menor -> mayor)"},
    {value: "priceDesc", label: "Preu (mayor -> menor)"}
  ]

  const productsSorted = getVisibleProducts(catalog, sortkey);
  const lines = getCartLines(catalog, currentCart);
  const total = getCartTotal(catalog, currentCart);

  const normalized = searchQuery.trim().toLowerCase();

  const products = normalized.length === 0
  ? productsSorted
  : productsSorted.filter((p) =>
      p.name.toLowerCase().includes(normalized)
    );

    let isDisabled = canAddMore(currentCart, catalog, )


    function getProductorLog(productId, functionToCheck) {
      let product = catalog.findById(productId);

      if (!product) {
        console.error(`${functionToCheck}: productId no existe en el catalogo`, productId) ;
        product = null;
     }
        return product
     }
function handleAdd(productId){
    setCurrentCart(prev => {
    if  (!getProductorLog(productId, "handleAdd")) {
      return prev
    }
      return !canAddMore(prev, catalog, productId) ?
    prev :
    prev.add(productId, 1)
});
  }

function handleInc(productId) {
  setCurrentCart((prev) => {
 if  (!getProductorLog(productId, "handleInc")) {
      return prev
    }
   return !canAddMore(prev, catalog, productId) ?
    prev :
    prev.updateQty(productId, getQtyInCart(prev, productId) + 1);
   }
  );
}

function isAddDisabled (productId) {
  return !canAddMore(currentCart, catalog, productId)
}


function handleDec(productId) {
  setCurrentCart((prev) => {
     if  (!getProductorLog(productId, "handleDec")) {
      return prev
    }
    const currentQty = prev.items.find((it) => it.productId === productId)?.qty ?? 0;
    return prev.updateQty(productId, currentQty - 1);
  });
}



  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shop Online</h1>
      </header>

      <main className={styles.content}>
        <div className={styles.controls}>
        <label htmlFor="filtre">Ordenar:</label>
            <select id="filtre" value={sortkey} onChange={(ev) => setSortkey(ev.target.value)}>
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        <label htmlFor="cerca">Cercar:</label>
        <input id="cerca"
              type="text"
              value={searchQuery}
              onChange={(ev) => setSearchQuery(ev.target.value)}
              placeholder="Escriu un nom..." />
        <button type="button" onClick={() => setSearchQuery("")}>Netejar</button>
        </div>
        <ProductList products={products} onAdd={handleAdd} isAddDisabled = {isAddDisabled}/>
        <CartView lines={lines} total={total} onInc={handleInc} onDec={handleDec} isAddDisabled = {isAddDisabled} />
      </main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} - PROYECTO DEMO - Cristòfol Comas Llompart</small>
      </footer>
    </div>
  );
}

export default Shop;
