import Link from 'next/link'
import { useState } from 'react';
import Search from '@material-ui/icons/Search';

function NavBar(props) {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
            <svg class="fill-current h-8 w-8 mr-2" width="44" height="44" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span class="font-semibold text-xl tracking-tight">Sweet Dreams</span>
          </a>
        </Link>
      </div>
      <div class="shadow flex">
        <input class="w-full rounded p-2" type="text" placeholder="Search..." />
        <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
          onClick={() => { }} >
          <Search />
        </button>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link href="/">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              onClick={e => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}>
            </a>
          </Link>
          <Link href="/products">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Products
            </a>
          </Link>
          {props.user && props.user.accessLevel < 1 && (
            <Link href="/add-products">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Add Product
              </a>
            </Link>
          )}
          <Link href="/cart">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Cart
            <span
                className="tag is-primary"
                style={{ marginLeft: "5px" }}
              >
                {props.cartSize}
              </span>
            </a>
          </Link>
        </div>
        <div>
          {!props.user ? (
            <Link href="/login">
              <a class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Login
            </a>
            </Link>
          ) : (
              <a
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                onClick={e => {
                  e.preventDefault();
                  props.logout();
                }}>
                Logout
              </a>
            )}
        </div>
      </div>
    </nav>

  );
}

export default NavBar;