import React from "react"
import { useOutletContext } from "react-router-dom"
import ProductList from "../ProductList/ProductList";
import styles from "../Shop/Shop.module.css";
function CatalogPage() {
    const { products, handleAdd, isAddDisabled, setSearchQuery, setSortkey, sortkey, searchQuery, SORT_OPTIONS} = useOutletContext();
    
    return(
        <>
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
        <ProductList products={products} 
                    onAdd={handleAdd} 
                    isAddDisabled={isAddDisabled}/>
        </>
    ) 
}
export default CatalogPage