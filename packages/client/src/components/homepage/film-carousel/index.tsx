import React from "react";
import "./film-carousel.sass";
import { Carousel } from "react-bootstrap";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";

export interface ISliderProps {}

export function FilmCarousel(props: ISliderProps) {
  return (
    <Carousel
      className="carousel"
      interval={null}
      fade={true}
      nextIcon={<ArrowNext />}
      prevIcon={<ArrowPrev />}
    >
      <Carousel.Item>
        <Slide
          genres={["Fantasy", "Non-fiction"]}
          filmName="Test film"
          ratings={[
            { value: 8.7, raterName: "The experts" },
            { value: 8.7, raterName: "The experts" }
          ]}
        />
      </Carousel.Item>
    </Carousel>
  );
}
