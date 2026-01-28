import styles from "./ProductList.module.css";
import  ProductItem  from "../ProductItem/ProductItem";

function ProductList({ products, onAdd, isAddDisabled }) {
  
  return (
    
    <section className={styles.card}>
      <h2 className={styles.heading}>Catàleg {products.length}</h2>
      <ul className={styles.list}>
        {products.length === 0 ? <p>"No hi ha resultats per a la cerca."</p> :
        products.map((p) => (
          <ProductItem key={p.id} product={p} onAdd={onAdd} isAddDisabled = {isAddDisabled}/>
        ))}
      </ul>
    </section>
  );
}

export default ProductList