import React from "react";
import { config } from "config";

import { CircularProgressbar } from "react-circular-progressbar";
import { Button } from "react-materialize";

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
              <li className="genre" key={genre.name}>
                {genre.name}
              </li>
            ))}
          </ul>
          <h2 className="film-name">{props.name}</h2>
          <div className="buttons">
            <Button
              flat
              waves="light"
              icon={
                <>
                  <i className="fas fa-play button-icon"></i>
                  Watch trailer
                </>
              }
              className="slide-btn"
            ></Button>
            <Button
              flat
              waves="light"
              icon={
                <>
                  <i className="fas fa-play button-icon"></i>
                  Buy ticket
                </>
              }
              className="slide-btn"
            ></Button>
          </div>
        </div>
        <ul className="slide-ratings">
          {props.ratings.map(rating => {
            return (
              <li className="rating-element" key={rating.raterName}>
                <h3 className="rater-name">{rating.raterName}</h3>
                <div className="progressbar-container">
                  <CircularProgressbar
                    value={rating.ratingValue * 10}
                    text={rating.ratingValue + ""}
                    background={true}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
