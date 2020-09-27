import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./productSlick.module.css"

export default class ProductSlick extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      autoplay: true
    };
    return (
      <div className={styles.slickContainer}>
        <Slider {...settings}>
          <div>
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/412870/item/goods_01_412870.jpg?width=800" />
          </div>
          <div>
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/412870/item/goods_01_412870.jpg?width=800" />
          </div>
          <div>
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/412870/item/goods_01_412870.jpg?width=800" />
          </div>
          <div>
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/412870/item/goods_01_412870.jpg?width=800" />
          </div>
        </Slider>
      </div>
    );
  }
}
