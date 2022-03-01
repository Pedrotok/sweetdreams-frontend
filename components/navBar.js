import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Logo from 'public/logo';
import ShoppingCart from 'components/common/shoppingCart';

import styles from './navBar.module.css';
import MoonIcon from 'public/icons/moonIcon';

function NavBar(props) {
  const searchBar = (
    <div className="flex border-b-2 border-gray-200 h-6">
      <input
        className="p-2 focus:outline-none text-xs"
        type="text"
        placeholder="Search..."
      />
      <button
        className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
        onClick={() => {}}
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
      {props.user && props.user.accessLevel < 1 && (
        <Link href="/add-products">
          <a className={styles.menuItem}>Admin</a>
        </Link>
      )}
      {!props.user ? (
        <Link href="/login">
          <a className={styles.menuItem}>Login</a>
        </Link>
      ) : (
        <a
          className={styles.menuItem}
          onClick={(e) => {
            e.preventDefault();
            props.logout();
          }}
        >
          Logout
        </a>
      )}
    </div>
  );

  const cartIcon = (
    <Link href="/cart">
      <a className="border-l-2 border-gray-200 px-4 ml-4">
        <ShoppingCartOutlinedIcon />
        {props.cartSize > 0 && (
          <span className="tag is-primary" style={{ marginLeft: '5px' }}>
            {props.cartSize}
          </span>
        )}
      </a>
    </Link>
  );

  return (
    <nav className="px-8 border-b border-grey-300">
      <div className="flex items-center p-4">
        <MoonIcon />
        <Logo />
        <div className=" flex items-center ml-auto">
          {navBarLinks}
          {/* {searchBar} */}
          <ShoppingCart cartSize={props.cartSize} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
