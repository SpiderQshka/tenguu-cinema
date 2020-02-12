import React from "react";
import Button from "@material-ui/core/Button";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "../../../config.sass";

export interface ISlideProps {
  genres: string[];
  filmName: string;
  ratings: {
    value: number;
    raterName: string;
  }[];
  filmImage: string;
}

export function Slide(props: ISlideProps) {
  return (
    <div
      className="slide-wrapper"
      style={{ backgroundImage: `url(${props.filmImage || null})` }}
    >
      <div className="slide">
        <div className="slide-content">
          <ul className="genres">
            {props.genres.map(genre => (
              <li className="genre">{genre}</li>
            ))}
          </ul>
          <h2 className="film-name">{props.filmName}</h2>
          <div className="buttons">
            <Button className="slide-btn">
              <i className="fas fa-play button-icon"></i>
              Watch trailer
            </Button>
            <Button className="slide-btn">
              <i className="fas fa-shopping-cart button-icon"></i>
              Buy ticket
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
                    background={true}
                  />
                </div>
                <h3 className="rater-name">{rating.raterName}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
