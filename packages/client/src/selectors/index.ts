import { createSelector } from "reselect";
import { IState } from "interfaces/IState";

const filmsSelector = (state: IState) => state.films;
const sessionsSelector = (state: IState) => state.sessions;
const currentUserAndTicketsSelector = (state: IState) => {
  return { user: state.users.currentUser, tickets: state.tickets.data };
};

export const comingSoonFilmsSelector = createSelector(
  filmsSelector,
  (films) => {
    return {
      data: films.data.filter(
        (film) => new Date(film.releaseDate).getTime() > Date.now()
      ),
      pending: films.pending,
      error: films.error,
    };
  }
);

export const nowPlayingFilmsSelector = createSelector(
  filmsSelector,
  (films) => {
    return {
      data: films.data.filter(
        (film) => new Date(film.releaseDate).getTime() <= Date.now()
      ),
      pending: films.pending,
      error: films.error,
    };
  }
);

export const activeForBuyingFilmSelector = createSelector(
  filmsSelector,
  (films) => {
    return (
      films.data.filter((film) => film.id === films.activeFilmForBuyingId)[0] ||
      null
    );
  }
);

export const activeForBuyingSessionSelector = createSelector(
  sessionsSelector,
  (sessions) => {
    return (
      sessions.data.filter(
        (session) => session.id === sessions.activeSessionForBuyingId
      )[0] || null
    );
  }
);

export const activeForShowTrailerFilmSelector = createSelector(
  filmsSelector,
  (films) => {
    return (
      films.data.filter(
        (film) => film.id === films.activeFilmForShowTrailerId
      )[0] || null
    );
  }
);

export const currentTicketsSelector = createSelector(
  currentUserAndTicketsSelector,
  ({ user, tickets }) => {
    return tickets.filter((ticket) => ticket.user === user.id);
  }
);
