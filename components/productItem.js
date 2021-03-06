import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <Link href="/products/[id]" as={`/products/${product._id}`}>
      <div className="max-w-xxs m-4 cursor-pointer">
        <img
          className="w-full"
          src={product.imageUrl}
          alt={product.description}
        />
        <div className="text-sm text-center">
          <p>{product.name.toUpperCase()}</p>
          <p className="font-bold">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
