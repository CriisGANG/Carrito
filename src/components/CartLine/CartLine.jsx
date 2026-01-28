import styles from "./CartLine.module.css";

function CartLine({ line, onInc, onDec, isAddDisabled }) {
  
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.name}>{line.productName}</p>
        <div className={styles.meta}>
          <span className={styles.pill}>qty: {line.qty}</span>
          <span className={styles.pill}>{line.lineTotal.toFixed(2)} €</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.iconBtn} onClick={()=> onInc(line.productId)} disabled={isAddDisabled(line.productId)} >+</button>
        <button className={styles.iconBtn} onClick={()=> onDec(line.productId)}>-</button>
      </div>
    </li>
  );
}

export default CartLine
