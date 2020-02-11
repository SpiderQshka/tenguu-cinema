import React from "react";

import { Button } from "react-bootstrap";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../../config.sass";

export interface ISlideProps {
  genres: string[];
  filmName: string;
  ratings: {
    value: number;
    raterName: string;
  }[];
}

export function Slide(props: ISlideProps) {
  return (
    <div className="slide">
      <div className="slide-content">
        <ul className="genres">
          {props.genres.map(genre => (
            <li className="genre">{genre}</li>
          ))}
        </ul>
        <h2 className="film-name">{props.filmName}</h2>
        <div className="buttons">
          <Button variant="light" className="bg-transparent border-0">
            <i className="fas fa-play button-icon"></i>
            <span className="button-text">Watch trailer</span>
          </Button>
          <Button variant="light" className="bg-transparent border-0">
            <i className="fas fa-shopping-cart button-icon"></i>
            <span className="button-text">Buy ticket</span>
          </Button>
        </div>
      </div>
      <ul className="slide-ratings">
        {props.ratings.map(rating => {
          return (
            <li className="rating-element">
              <div className="progressbar-container">
                <CircularProgressbar
                  value={rating.value * 10}
                  text={rating.value + ""}
                />
              </div>
              <h3 className="rater-name">{rating.raterName}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
