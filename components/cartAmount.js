import { useState } from 'react';
import styles from './cart.module.css';

export default function CartAmount(props) {
  const { product, updateCart, removeFromCart } = props;

  return (
    <div className="float-right">
      <input
        className="w-12 border border-gray-400 m-auto"
        type="number"
        value={product.amount}
        onChange={(e) => {
          product.amount = Math.max(e.target.value, 1);
          updateCart(product);
        }}
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
