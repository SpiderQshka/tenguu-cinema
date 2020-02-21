import { createSelector } from "reselect";
import { IState, IPayloads } from "interfaces/IState";

const filmsSelector = (state: IState) => state.films.data;
const userSelector = (state: IState) => state.user.data;
const sessionsSelector = (state: IState) => state.sessions.data;
// const pendingsSelection = (state: IState) => {
//   const result = [];
//   let prop: string;
//   for (prop in state) {

//     result.push(state[prop]);
//   }
// };

export const comingSoonFilmsSelector = createSelector(filmsSelector, films =>
  films.filter(film => film.releaseDate > Date.now())
);

// export const isAllComponentsPendingSelector = createSelector(
//   (state: IState) => state
// );
