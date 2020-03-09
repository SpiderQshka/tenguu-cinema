import { createSelector } from "reselect";
import { IState } from "interfaces/IState";

const filmsSelector = (state: IState) => state.films.data;

export const comingSoonFilmsSelector = createSelector(filmsSelector, films => {
  console.log(typeof films[0].releaseDate);

  return {
    data: films.filter(
      film => new Date(film.releaseDate).getTime() > Date.now()
    )
  };
});

export const nowPlayingFilmsSelector = createSelector(filmsSelector, films => {
  console.log(typeof films[0].releaseDate);
  return {
    data: films.filter(
      film => new Date(film.releaseDate).getTime() <= Date.now()
    )
  };
});
