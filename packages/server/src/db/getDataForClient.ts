import { models } from "../models/index";

export const getFilmsForClient = async (params: object = {}) => {
  const films = await models.Film.find(params);

  models.Film.aggregate()
    .lookup({
      from: "genres",
      localField: "name",
      foreignField: "name",
      as: "genres"
    })
    .then(res => console.log(res[0]));

  const filmsPromises = films.map(async film => {
    const genresPromises = film.genreIds.map(
      async (id): Promise<string> => {
        const genre = await models.Genre.findById(id);
        return genre ? genre.name : "";
      }
    );
    const genresArray = await Promise.all(genresPromises);

    return {
      genres: genresArray,
      _id: film._id,
      __v: film.__v,
      name: film.name,
      duration: film.duration,
      trailerLink: film.trailerLink,
      ratings: film.ratings,
      filmImage: film.filmImage
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
      __v: session.__v,
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
    const user = await models.User.findById(ticket.userId);
    return {
      _id: ticket._id,
      __v: ticket.__v,
      user,
      status: ticket.status,
      seat: ticket.seat,
      session
    };
  });

  return Promise.all(ticketsPromises);
};
