import { createSelector } from "reselect";
import { IState } from "interfaces/IState";

const filmsSelector = (state: IState) => state.filmsData.films;
const userSelector = (state: IState) => state.userData.currentUser;
const sessionsSelector = (state: IState) => state.sessionsData.sessions;

// const comingSoonFilmsSelector = createSelector(filmsSelector, films =>
//   films.filter(film => film.)
// );
