import EmptyCart from 'components/emptyCart';
import CartWithProducts from 'components/cartWithProducts';
import { useAppState } from 'hooks/useAppState';

const Cart = () => {
  const { cart, updateItemOnCart, removeFromCart } = useAppState();

  return (
    cart.length === 0 ?
      <EmptyCart />
      :
      <CartWithProducts
        cart={cart}
        updateItemOnCart={updateItemOnCart}
        removeFromCart={removeFromCart}
      />
  );
}

export default Cart;