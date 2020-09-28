import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import styles from './navBar.module.css';

function NavBar(props) {
  const logo = (
    <div className="flex flex-shrink-0 mr-6">
      <Link href="/">
        <>
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="44"
            height="44"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Sweet Dreams
          </span>
        </>
      </Link>
    </div>
  );

  const searchBar = (
    <div className="shadow flex">
      <input
        className="w-full rounded p-2"
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

  const dropDownMenuIcon = (
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );

  const navBarLinks = (
    <div className="float-right">
      <div>
        <Link href="/products">
          <a className={styles.menuItem}>PRODUCTS</a>
        </Link>
        {props.user && props.user.accessLevel < 1 && (
          <Link href="/add-products">
            <a className={styles.menuItem}>ADMIN</a>
          </Link>
        )}
        {!props.user ? (
          <Link href="/login">
            <a className={styles.menuItem}>LOGIN</a>
          </Link>
        ) : (
          <a
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              props.logout();
            }}
          >
            LOGOUT
          </a>
        )}
      </div>
    </div>
  );

  const cartIcon = (
    <Link href="/cart">
      <a className="">
        <ShoppingCartOutlinedIcon />
        <span className="tag is-primary" style={{ marginLeft: '5px' }}>
          {props.cartSize}
        </span>
      </a>
    </Link>
  );

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {logo}
      {dropDownMenuIcon}
      {searchBar}
      {navBarLinks}
      {cartIcon}
    </nav>
  );
}

export default NavBar;
