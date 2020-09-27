import { getAllProductsIds, getProductById } from 'lib/products'

export default function Product({ productData }) {
  return <p>{productData.name}</p>
}

export async function getStaticPaths() {
  const paths = await getAllProductsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProductById(params.id)
  return {
    props: {
      productData
    }
  }
}