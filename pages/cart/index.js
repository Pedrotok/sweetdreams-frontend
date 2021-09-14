import Context from 'Context';
import EmptyCart from 'components/emptyCart';
import CartWithProducts from 'components/cartWithProducts';

export default function Cart(props) {
  return (
    <Context.Consumer>
      {value =>   
        value.cart.length === 0 ?
        <EmptyCart />
        :
        <CartWithProducts value={value} />
      }
    </Context.Consumer>
  );
}
