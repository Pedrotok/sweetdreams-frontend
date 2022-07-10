import { useLocalStorage } from "hooks/useLocalStorage";
import { createContext } from "react";

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [products, setProducts] = useLocalStorage("products", []);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (cartItem) => {
    const index = cart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);

    if (index >= 0) {
      cart[index].amount += cartItem.amount;
    } else {
      cart.push(cartItem);
    }

    setCart([...cart]);
  };

  const updateItemOnCart = (cartItem) => {
    const index = cart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);
    if (index >= 0) {
      cart[index] = cartItem;
      setCart([...cart]);
    }
  };

  const removeFromCart = (cartItem) => {
    const index = cart.findIndex((item) => item._id === cartItem._id && item.size === cartItem.size);

    if (index >= 0) {
      cart.splice(index, 1);
      setCart([...cart]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    if (!user) {
      return;
    }
    clearCart();
  };

  return (
    <AppStateContext.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        clearCart,
        checkout,
        user,
        setUser,
        updateItemOnCart,
      }}>
      {children}
    </AppStateContext.Provider>);
}