import { createSelector } from "reselect";
import { IState } from "interfaces/IState";

const filmsSelector = (state: IState) => state.films.data;
const userSelector = (state: IState) => state.user.data;
const sessionsSelector = (state: IState) => state.sessions.data;

export const comingSoonFilmsSelector = createSelector(filmsSelector, films =>
  films.filter(film => film.releaseDate > Date.now())
);
