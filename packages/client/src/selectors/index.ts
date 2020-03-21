import { createSelector } from "reselect";
import { IState } from "interfaces/IState";

const filmsSelector = (state: IState) => state.films.data;
const filmsPayloadSelector = (state: IState) => state.films;
const sessionsPayloadSelector = (state: IState) => state.sessions;
const ticketsSelector = (state: IState) => state.tickets;
const currentUserAndTicketsSelector = (state: IState) => {
  return { user: state.users.currentUser, tickets: state.tickets.data };
};

export const comingSoonFilmsSelector = createSelector(filmsSelector, films => {
  return {
    data: films.filter(
      film => new Date(film.releaseDate).getTime() > Date.now()
    )
  };
});

export const nowPlayingFilmsSelector = createSelector(filmsSelector, films => {
  return {
    data: films.filter(
      film => new Date(film.releaseDate).getTime() <= Date.now()
    )
  };
});

export const activeForBuyingFilmSelector = createSelector(
  filmsPayloadSelector,
  films => {
    return (
      films.data.filter(film => film.id === films.activeFilmForBuyingId)[0] ||
      null
    );
  }
);

export const activeForBuyingSessionSelector = createSelector(
  sessionsPayloadSelector,
  sessions => {
    return (
      sessions.data.filter(
        session => session.id === sessions.activeSessionForBuyingId
      )[0] || null
    );
  }
);

export const activeForShowTrailerFilmSelector = createSelector(
  filmsPayloadSelector,
  films => {
    return (
      films.data.filter(
        film => film.id === films.activeFilmForShowTrailerId
      )[0] || null
    );
  }
);

export const currentTicketsSelector = createSelector(
  currentUserAndTicketsSelector,
  ({ user, tickets }) => {
    return tickets.filter(ticket => ticket.user === user.id);
  }
);
