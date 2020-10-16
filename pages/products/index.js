import { getProducts } from 'lib/products';
import ProductItem from 'components/productItem';

export default function Products(props) {
  const products = props.products;
  return (
    <div>
      <div className="m-12 hero is-primary">
        <div className="m-auto hero-body container">
          <h1 className="title text-center">Our Products</h1>
        </div>
      </div>
      <br />
      <div className="mx-auto mb-16">
        <div className="flex flex-wrap justify-around">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem product={product} key={index} />
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
      products,
    },
  };
}
