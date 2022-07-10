import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Logo from 'public/logo';
import ShoppingCart from 'components/common/shoppingCart';

import styles from './navBar.module.css';
import MoonIcon from 'public/icons/moonIcon';
import { useAppState } from 'hooks/useAppState';
import { logout as libLogout } from 'lib/user';

const NavBar = () => {
  const { user, cart, setUser } = useAppState();

  const cartSize = cart.length;

  const logout = () => {
    libLogout();
    setUser(null);
  };

  const searchBar = (
    <div className="flex border-b-2 border-gray-200 h-6">
      <input
        className="p-2 focus:outline-none text-xs"
        type="text"
        placeholder="Search..."
      />
      <button
        className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
        onClick={() => { }}
      >
        <Search />
      </button>
    </div>
  );

  const navBarLinks = (
    <div className="items-center mr-4">
      <Link href="/">
        <a className={styles.menuItem}>Home</a>
      </Link>
      <Link href="/products">
        <a className={styles.menuItem}>Products</a>
      </Link>
      {user && user.accessLevel < 1 && (
        <Link href="/add-products">
          <a className={styles.menuItem}>Admin</a>
        </Link>
      )}
      {!user ? (
        <Link href="/login">
          <a className={styles.menuItem}>Login</a>
        </Link>
      ) : (
        <a
          className={styles.menuItem}
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          Logout
        </a>
      )}
    </div>
  );

  return (
    <nav className="px-8 border-b border-grey-300">
      <div className="flex items-center p-4">
        <MoonIcon />
        <Logo />
        <div className=" flex items-center ml-auto">
          {navBarLinks}
          {/* {searchBar} */}
          <ShoppingCart cartSize={cartSize} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
