import React from "react";
import CarouselSlick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./carousel.module.sass";

export interface ICarousel {
  items: any[];
  pending: boolean;
  BasicElement: any;
  next: any;
  prev: any;
}

export function CarouselComponent(props: ICarousel) {
  const { items, pending, BasicElement } = props;
  console.log(BasicElement);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: items.length > 5 ? 5 : items.length - 1,
    slidesToScroll: 1,
    nextArrow: props.next,
    prevArrow: props.prev
  };
  return (
    <div className={styles["slider-block"]}>
      <CarouselSlick {...settings}>
        {items.map((item: any) => (
          <BasicElement item={item} key={item._id} pending={pending} />
        ))}
      </CarouselSlick>
    </div>
  );
}
