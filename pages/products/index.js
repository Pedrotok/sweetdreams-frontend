import { getProducts } from 'lib/products'
import ProductItem from 'components/productItem'

export default function Products(props) {
  const products = props.products;
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="mx-auto">
        <div className="flex flex-wrap">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
              />
            ))
          ) : (
              <div className="column">
                <span className="title has-text-grey-light">
                  No product found!
              </span>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts(0);
  return {
    props: {
      products
    }
  };
}