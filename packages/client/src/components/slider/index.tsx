import React from "react";
import Slider, { Settings } from "react-slick";

import { ArrowNext, ArrowPrev } from "./Controls";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.sass";

export interface ISliderProps {
  settings: Settings;
}

export default function UserSlider(props: ISliderProps) {
  //   const {
  //     dots,
  //     infinite,
  //     slidesToShow,
  //     slidesToScroll,
  //     nextArrow,
  //     prevArrow
  //   } = { props };
  //   const settings = {
  //     dots: props.dots || false,
  //     infinite: props.infinite || true,
  //     slidesToShow: props.slidesToShow || 1,
  //     slidesToScroll: props.slidesToScroll || 1,
  //     nextArrow: props.nextArrow || <ArrowNext onClick={e => {}} />,
  //     prevArrow: props.prevArrow || <ArrowPrev onClick={e => {}} />
  //   };
  return (
    <div className="slider-block">
      <Slider {...props.settings}></Slider>
    </div>
  );
}
