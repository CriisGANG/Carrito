import styles from "./CartView.module.css";
import CartLine from "../CartLine/CartLine";

function CartView({ lines, total, onInc, onDec, isAddDisabled }) {
  
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Carret {lines.length}</h2>

      <ul className={styles.list}>
        {lines.length === 0 ? <p className={styles.empty}>"El carret està buit."</p> :

        lines.map((l) => (
          <CartLine key={l.productId} line={l} onInc={onInc} onDec={onDec} isAddDisabled = {isAddDisabled} />
        ))}
      </ul>

      <div className={styles.footer}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>{total.toFixed(2)} €</span>
      </div>
    </section>
  );
}


export default CartView