import Carousel from 'components/home/carousel';
import About from 'components/home/about';
import FeaturedProducts from 'components/home/featuredProducts';

export default function Index() {
  return (
    <div className="">
      <Carousel />
      <FeaturedProducts />
      <About />
    </div>
  );
}