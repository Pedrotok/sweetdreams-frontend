import App from "next/app";
import NavBar from "components/navBar";
import MainFooter from "components/mainFooter"
import data from "data";
import Context from "Context";


import 'styles/global.css'

class MainApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      user: null,
      products: []
    };
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    this.setState({ products }, () => callback && callback());
  };

  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      return;
    }
    const cart = this.state.cart;
    const products = this.state.products.map(p => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;
      }
      return p;
    });
    this.setState({ products });
    this.clearCart();
  };

  componentDidMount() {
    let user = localStorage.getItem("user");
    let products = localStorage.getItem("products");
    let cart = localStorage.getItem("cart");


    products = products ? JSON.parse(products) : data.initProducts;
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};

    this.setState({ user, products, cart });
  }

  login = (usn, pwd) => {
    let user = data.users.find(u => u.username === usn && u.password === pwd);
    if (user) {
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <NavBar
          user={this.state.user}
          cartSize={Object.keys(this.state.cart).length}
          logout={() => this.logout()}
        />
        <Component {...pageProps} />
        <MainFooter />
      </Context.Provider>
    );
  }
}

export default MainApp;