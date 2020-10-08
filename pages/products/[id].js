import { getAllProductsIds, getProductById } from 'lib/products';
import Dropdown from 'components/common/dropdown';
import { useState } from 'react';

export default function Product({ product }) {
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-wrap justify-center mx-20 my-5">
      <div className="flex-1 mr-10">
        <img className="min-w-sm max-w-sm ml-auto" src={product.imageUrl} alt={product.description} />
      </div>
      <div className="flex-1 ml-10 align-top">
        <h1 className="mb-1">{product.name}</h1>
        <h2 className="text-opacity-75">R$ {product.price.toFixed(2)}</h2>
        <div className="my-5 h-2px w-12 bg-black"></div>
        <div className="text-opacity-50 text-darkblue text-base">
          <p className="max-w-sm">{product.description}</p>
        </div>
        <div className="my-3 space-y-4">
          <Dropdown title="Size" handleChange={() => { }} optionsList={[{ value: 'S', text: 'S' }, { value: 'M', text: 'M' }]} />
          <Dropdown title="Color" handleChange={() => { }} optionsList={[{ value: 'blue', text: 'Blue' }, { value: 'red', text: 'Red' }]} />
        </div>
        <input className="mr-4 w-16  outline-none" id="amount" type="number" value={amount} onChange={e => { setAmount(e.target.value) }} />
        <button className="btn mt-6 bg-blue-500 hover:bg-blue-700 text-white">
          Add to cart
        </button>

      </div >

    </div >
  );
}

export async function getStaticPaths() {
  const paths = await getAllProductsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProductById(params.id)
  return {
    props: {
      product
    }
  }
}