import Link from 'next/link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Logo from 'public/logo';

const socialMedia = (
  <div className="grid grid-cols-1">
    <h3 className="text-white">Social Media</h3>
    <a href="#" className="footer-link">
      Whatsapp
    </a>
    <a href="#" className="footer-link">
      Facebook
    </a>
    <a href="#" className="footer-link">
      Instagram
    </a>
  </div>
);

const menu = (
  <div className="grid grid-cols-1">
    <h3 className="text-white">Menu</h3>
    <Link href="/">
      <a className="footer-link">Home</a>
    </Link>
    <Link href="/products">
      <a className="footer-link">Products</a>
    </Link>
    <Link href="/login">
      <a className="footer-link">Login</a>
    </Link>
  </div>
);

const newsletter = (
  <div>
    <h3 className="text-white">The good stuff in your inbox</h3>
    <p className="footer-text">
      News & updates from Olea. No spam, we promise.
    </p>
    <div className="flex border-b border-gray-200 h-6 bg-color-black mt-8">
      <input
        className="p-2 focus:outline-none text-xs bg-transparent w-full"
        type="text"
        placeholder="Enter your email"
      />
      <button
        className="w-40 flex justify-end items-center text-blue-500 hover:text-blue-400"
        onClick={() => {}}
      >
        <p className="text-white">Sign up</p>
        <ArrowForwardIosIcon
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            padding: '4px',
          }}
        />
      </button>
    </div>
  </div>
);

function MainFooter() {
  return (
    <div className="bg-darkerblue pt-24 pb-8 px-8">
      <div className="flex flex-wrap space-x-32">
        <Logo textColor="white" />
        {menu}
        {socialMedia}
        {newsletter}
      </div>
      <div className="border-t border-white border-opacity-25 mt-16 pt-4">
        <p className="text-center text-white text-sm">
          Made with ❤️ by SweetDreams
        </p>
      </div>
    </div>
  );
}

export default MainFooter;
