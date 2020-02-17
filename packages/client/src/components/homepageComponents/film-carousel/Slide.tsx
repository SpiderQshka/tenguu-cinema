import React from "react";
import Button from "@material-ui/core/Button";
import { config } from "config";

import { CircularProgressbar } from "react-circular-progressbar";

import { IFilmWithGenres } from "interfaces/IFilm";

import "react-circular-progressbar/dist/styles.css";

export function Slide(props: IFilmWithGenres) {
  return (
    <div
      className="slide-wrapper"
      style={{
        backgroundImage: `url(${config.baseUrl + props.filmImage})`
      }}
    >
      <div className="slide">
        <div className="slide-content">
          <ul className="genres">
            {props.genres.map(genre => (
              <li className="genre" key={genre._id}>
                {genre.name}
              </li>
            ))}
          </ul>
          <h2 className="film-name">{props.name}</h2>
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
              <li className="rating-element" key={rating.raterName}>
                <div className="progressbar-container">
                  <CircularProgressbar
                    value={rating.ratingValue * 10}
                    text={rating.ratingValue + ""}
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
