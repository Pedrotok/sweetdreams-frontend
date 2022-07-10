import { TextField } from '@material-ui/core';
import styles from './cart.module.css';

export default function CartAmount(props) {
  const { product, updateCart, removeFromCart } = props;

  return (
    <div className="float-right">
      <TextField
        id={`${product.name}-${product.size}-amount`}
        className="w-16"
        type="number"
        value={product.amount}
        variant="outlined"
        onChange={(e) => {
          product.amount = Math.max(e.target.value, 1);
          updateCart(product);
        }}
        size="small"
      />
      <div>
        <a
          href="#"
          className={styles.cartLink}
          onClick={() => removeFromCart(product)}
        >
          Remover
        </a>
      </div>
    </div>
  );
}
