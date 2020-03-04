import { models } from "../models/index";

export const getHallsForClient = async (params: object = {}) => {
  const halls = await models.Hall.find(params);

  const hallsPromises = halls.map(async hall => {
    return {
      _id: hall._id,
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
      _id: genre._id,
      name: genre.name
    };
  });

  return Promise.all(genresPromises);
};

export const getFilmsForClient = async (params: object = {}) => {
  const films = await models.Film.find(params);

  const filmsPromises = films.map(async film => {
    const genresPromises = film.genreIds.map(
      async (id): Promise<string> => {
        const genre = await models.Genre.findById(id);
        return genre ? genre.name : "";
      }
    );
    const genresArray = await Promise.all(genresPromises);

    return {
      _id: film._id,
      genres: genresArray,
      name: film.name,
      duration: film.duration,
      trailerLink: film.trailerLink,
      filmImage: film.filmImage,
      ratings: film.ratings,
      releaseDate: film.releaseDate
    };
  });

  return Promise.all(filmsPromises);
};

export const getSessionsForClient = async (params: object = {}) => {
  const sessions = await models.Session.find(params);

  const sessionsPromises = sessions.map(async session => {
    const film = await getFilmsForClient({ _id: session.filmId });

    const hall = await models.Hall.findById(session.hallId);
    return {
      _id: session._id,

      dateTime: session.dateTime,
      price: session.price,
      hall,
      film: film[0]
    };
  });

  return Promise.all(sessionsPromises);
};

export const getTicketsForClient = async (params: object = {}) => {
  const tickets = await models.Ticket.find(params);

  const ticketsPromises = tickets.map(async ticket => {
    const session = await getSessionsForClient({ _id: ticket.sessionId });
    return {
      _id: ticket._id,
      userId: ticket.userId,
      status: ticket.status,
      seat: ticket.seat,
      session
    };
  });

  return Promise.all(ticketsPromises);
};

export const getUsersForClient = async (params: object = {}) => {
  const users = await models.User.find(params);

  const usersPromises = users.map(async user => {
    const tickets = await getTicketsForClient({ userId: user._id });
    return {
      _id: user._id,
      status: user.status,
      email: user.email,
      username: user.username,
      photo: user.photo,
      tickets
    };
  });

  return Promise.all(usersPromises);
};
