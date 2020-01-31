import { UserStatuses, FilmGenres } from "./types";
import { Schema, Document } from "mongoose";

interface ISeat extends Document {
  row: number;
  seatNumber: number;
  hallId: Schema.Types.ObjectId;
}

interface ITicket extends Document {
  sessionId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  seatId: Schema.Types.ObjectId;
  status: UserStatuses;
}

interface IGenre extends Document {
  name: FilmGenres;
}

interface ISession extends Document {
  filmId: string;
  dateTime: string;
  price: number;
  hallId: string;
}

interface IFilm extends Document {
  name: string;
  genreId: Schema.Types.ObjectId;
  duration: number;
  trailerLink: string;
  rating: number;
}

interface IHall extends Document {
  name: string;
  numberOfSeats: number;
  seatsOnRow: number;
}

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  status: string;
}

interface IComment extends Document {
  content: string;
  filmId: Schema.Types.ObjectId;
}

export { ISeat, ITicket, IGenre, ISession, IFilm, IHall, IUser, IComment };
