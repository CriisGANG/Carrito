import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";


function ProductItem({ product, onAdd, isAddDisabled }) {
  return (
    <li className={styles.item}>
      <div>
        <Link to={`/product/${product.id}`}> 
        <p className={styles.name}>{product.name}</p>
        </Link>
        <div className={styles.meta}>
          <span className={styles.badge}>{product.formatPrice()}</span>
          <span className={styles.badge}>stock: {product.stock}</span>
        </div>
      </div>

      <div>
        <button  disabled={!product.isInStock() || isAddDisabled(product.id)} onClick = {() => onAdd(product.id) }>
          Afegir
        </button>
      </div>
    </li>
  );
}

export default ProductItem