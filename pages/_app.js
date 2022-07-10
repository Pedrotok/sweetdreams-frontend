import App from 'next/app';
import NavBar from 'components/navBar';
import MainFooter from 'components/mainFooter';
import data from 'data';
import Context from 'Context';

import { init as initAxios } from 'lib/axios';
import { logout as libLogout } from 'lib/user';

import 'styles/global.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { CardTravelTwoTone } from '@material-ui/icons';

export const MainApp = ({ Component, pageProps }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [products, setProducts] = useLocalStorage("products", []);
  const [cart, setCart] = useLocalStorage("cart", []);

  initAxios();

  const addToCart = (cartItem) => {
    const tempCart = cart;
    const index = tempCart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);

    if (index >= 0) {
      tempCart[index].amount += cartItem.amount;
    } else {
      tempCart.push(cartItem);
    }

    setCart(tempCart);
  };

  const updateItemOnCart = (cartItem) => {
    const tempCart = cart;
    const index = tempCart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);
    if (index >= 0) {
      tempCart[index] = cartItem;
      setCart(tempCart);
    }
  };

  const removeFromCart = (cartItem) => {
    const tempCart = cart;
    const index = tempCart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);

    if (index >= 0) {
      tempCart.splice(index, 1);
      setCart(tempCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    if (!user) {
      return;
    }
    this.clearCart();
  };

  const logout = () => {
    libLogout();
    setUser(null);
  };

  return (
    <Context.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        clearCart,
        checkout,
        setUser,
        updateItemOnCart,
      }}
    >
      <NavBar
        user={user}
        cartSize={cart.length}
        logout={() => logout()}
      />
      <Component {...pageProps} />
      <MainFooter />
    </Context.Provider>
  );
}

export default MainApp;
