import React from "react";

import { FilmCarousel } from "./film-carousel/index";
import { NowPlaying } from "./now-playing/index";

import "./homepage.sass";

interface IHomepageProps {}

export function Homepage(props: IHomepageProps) {
  return (
    <>
      <FilmCarousel
        films={[
          {
            genres: ["Fantasy", "Non-fiction"],
            filmName: "Test film",
            ratings: [
              { value: 8.7, raterName: "The experts" },
              { value: 8.7, raterName: "The experts" }
            ],
            filmImage: "./page.jpg"
          },
          {
            genres: ["Fantasy", "Non-fiction"],
            filmName: "Test film 2",
            ratings: [
              { value: 8, raterName: "The experts" },
              { value: 1.2, raterName: "The experts" }
            ],
            filmImage: "./page2.jpg"
          }
        ]}
      />
      <NowPlaying />
    </>
  );
}
