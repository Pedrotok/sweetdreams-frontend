import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

// import 'styles/carousel.css';

function Carousel() {

  return (
    <ReactCarousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
      <div>
        <img src="https://ruthrose.co.uk/wp-content/uploads/2018/08/christmas-photoshoot-pyjamas-photographer-london-2Z5A4132-f3.jpg" />
      </div>
      <div>
        <img src="http://ruthrose.co.uk/wp-content/uploads/2018/08/christmas-photoshoot-pyjamas-photographer-london-2Z5A6410-f3.jpg" />
      </div>
      <div>
        <img src="http://ruthrose.co.uk/wp-content/uploads/2018/08/christmas-photoshoot-pyjamas-photographer-london-2Z5A5832-f1.jpg" />
      </div>
    </ReactCarousel >
  );
};

export default Carousel;
