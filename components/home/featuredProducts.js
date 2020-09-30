import Link from 'next/link';

function FeaturedProducts() {
  return (
    <div className="m-32">
      <h2 className="text-center">Featured Products</h2>
      <h3 className="mt-2 text-center text-opacity-75">Check out our popular products</h3>
      <div className="flex flex-wrap my-8 justify-center">
        <div className="m-4 w-64 h-96 border-2 border-black"></div>
        <div className="m-4 w-64 h-96 border-2 border-black"></div>
        <div className="m-4 w-64 h-96 border-2 border-black"></div>
      </div>
      <Link href="/products">
        <p className="text-center text-indigo text-s tracking-wider opacity-75 font-medium hover:text-darkblue hover:underline cursor-pointer">View all products</p>
      </Link>
    </div>
  );
};

export default FeaturedProducts;