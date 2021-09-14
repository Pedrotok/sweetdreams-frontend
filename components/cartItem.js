export default function CartItem(props) {
  const product = props.row;

  return (
    <div className="flex flex-wrap space-x-8">
      <img
        className="w-16 border border-gray-300 p-1"
        src={product.imageUrl}
        alt={product.description}
      />
      <div>
        <p className="text-lg font-bold font-sans">{product.name}</p>
        <p>Tamanho: {product.size}</p>
        <p className="text-indigo opacity-75">
          COD: {product._id.substring(0, 9).toUpperCase()}
        </p>
      </div>
    </div>
  );
}
