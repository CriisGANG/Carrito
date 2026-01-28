import styles from "./ProductItem.module.css";

function ProductItem({ product, onAdd, isAddDisabled }) {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.meta}>
          <span className={styles.badge}>{product.formatPrice()}</span>
          <span className={styles.badge}>stock: {product.stock}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.btn} disabled={!product.isInStock() || isAddDisabled(product.id)} onClick = {() => onAdd(product.id) }>
          Afegir
        </button>
      </div>
    </li>
  );
}

export default ProductItem