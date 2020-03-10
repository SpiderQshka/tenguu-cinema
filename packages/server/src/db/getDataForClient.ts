import { models } from "../models/index";
import { ObjectId } from "mongodb";

export const getHallsForClient = async (params: object = {}) => {
  const halls = await models.Hall.find(params);

  const hallsPromises = halls.map(async hall => {
    return {
      id: hall._id,
      name: hall.name,
      numberOfRows: hall.numberOfRows,
      seatsOnRow: hall.seatsOnRow
    };
  });

  return Promise.all(hallsPromises);
};

export const getGenresForClient = async (params: object = {}) => {
  const genres = await models.Genre.find(params);

  const genresPromises = genres.map(async genre => {
    return {
      id: genre._id,
      name: genre.name
    };
  });

  return Promise.all(genresPromises);
};

export const getFilmsForClient = async (params: object = {}) => {
  const films = await models.Film.find(params);

  const filmsPromises = films.map(async film => {
    const genresPromises = film.genreIds.map(
      async (id): Promise<string | null> => {
        const genre = await getGenresForClient({ _id: id });
        return genre[0] ? genre[0].name : "Deleted";
      }
    );
    const genresArray = await Promise.all(genresPromises);

    return {
      id: film._id,
      genres: genresArray,
      genreIds: film.genreIds,
      name: film.name,
      duration: film.duration,
      trailerLink: film.trailerLink,
      filmImage: film.filmImage,
      ratings: film.ratings,
      releaseDate: film.releaseDate,
      description: film.description
    };
  });

  return Promise.all(filmsPromises);
};

export const getSessionsForClient = async (params: object = {}) => {
  const sessions = await models.Session.find(params);

  const sessionsPromises = sessions.map(async session => {
    const film = await getFilmsForClient({ _id: session.filmId });

    const hall = await getHallsForClient({ _id: session.hallId });
    return {
      id: session._id,
      dateTime: session.dateTime,
      price: session.price,
      hall: hall[0],
      hallId: session.hallId,
      film: film[0],
      filmId: session.filmId
    };
  });

  return Promise.all(sessionsPromises);
};

export const getTicketsForClient = async (params: object = {}) => {
  const tickets = await models.Ticket.find(params);

  const ticketsPromises = tickets.map(async ticket => {
    const session = await getSessionsForClient({ _id: ticket.sessionId });
    return {
      id: ticket._id,
      userId: ticket.userId,
      status: ticket.status,
      seat: ticket.seat,
      session: session[0],
      sessionId: ticket.sessionId
    };
  });

  return Promise.all(ticketsPromises);
};

export const getUsersForClient = async (params: object = {}) => {
  const users = await models.User.find(params);

  const usersPromises = users.map(async user => {
    const tickets = await getTicketsForClient({ userId: user._id });
    return {
      id: user._id,
      status: user.status,
      email: user.email,
      username: user.username,
      photo: user.photo,
      tickets,
      ticketIds: tickets
        .filter(ticket => user._id.equals(ticket.userId))
        .map(ticket => ticket.id)
    };
  });

  return Promise.all(usersPromises);
};
