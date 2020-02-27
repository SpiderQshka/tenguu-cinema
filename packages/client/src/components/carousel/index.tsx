import React from "react";
import CarouselSlick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.sass";

export interface ICarousel {
  items: any[];
  pending: boolean;
  BasicElement: any;
  next: any;
  prev: any;
  afterChange?: (currentSlide: number) => void;
  settings?: any;
}

export function CarouselComponent(props: ICarousel) {
  const { items, pending, BasicElement, afterChange } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: items.length > 5 ? 5 : items.length - 1,
    slidesToScroll: 1,
    prevArrow: props.prev,
    afterChange,
    ...props.settings
  };
  return (
    <div className="carousel-block">
      <CarouselSlick {...settings}>
        {items.map((item: any) => (
          <BasicElement item={item} key={item._id} pending={pending} />
        ))}
      </CarouselSlick>
    </div>
  );
}
