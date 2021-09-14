import App from 'next/app';
import NavBar from 'components/navBar';
import MainFooter from 'components/mainFooter';
import data from 'data';
import Context from 'Context';

import { init as initAxios } from 'lib/axios';
import { logout as libLogout } from 'lib/user';

import 'styles/global.css';

class MainApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      user: null,
      products: [],
    };
    initAxios();
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    this.setState({ products }, () => callback && callback());
  };

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    let index = -1;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === cartItem._id && cart[i].size === cartItem.size) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      cart[index].amount += cartItem.amount;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  };

  updateItemOnCart = (cartItem) => {
    let cart = this.state.cart;
    let index = -1;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === cartItem._id && cart[i].size === cartItem.size) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      cart[index] = cartItem;
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ cart });
    }
  };

  removeFromCart = (cartItem) => {
    let cart = this.state.cart;
    let index = -1;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === cartItem._id && cart[i].size === cartItem.size) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ cart });
    }
  };

  clearCart = () => {
    let cart = [];
    localStorage.removeItem('cart');
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      return;
    }
    const cart = this.state.cart;
    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;
      }
      return p;
    });
    this.setState({ products });
    this.clearCart();
  };

  setUser = (userData) => {
    this.setState({ user: userData });
  };

  logout = () => {
    libLogout();
    this.setState({ user: null });
  };

  componentDidMount() {
    let user = localStorage.getItem('user');
    let products = localStorage.getItem('products');
    let cart = localStorage.getItem('cart');

    products = products ? JSON.parse(products) : data.initProducts;
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : [];

    this.setState({ user, products, cart });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          addProduct: this.addProduct,
          checkout: this.checkout,
          setUser: this.setUser,
          updateItemOnCart: this.updateItemOnCart,
        }}
      >
        <NavBar
          user={this.state.user}
          cartSize={this.state.cart.length}
          logout={() => this.logout()}
        />
        <Component {...pageProps} />
        <MainFooter />
      </Context.Provider>
    );
  }
}

export default MainApp;
