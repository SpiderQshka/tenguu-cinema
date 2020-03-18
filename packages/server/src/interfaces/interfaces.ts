import { UserStatuses } from "../types/types";
import { Schema, Document } from "mongoose";

interface ITicket extends Document {
  sessionId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  seat: {
    row: number;
    seatNumber: number;
  };
  status: UserStatuses;
}

interface IGenre extends Document {
  name: string;
}

interface ISession extends Document {
  filmId: string;
  dateTime: string;
  price: number;
  hallId: string;
}

interface IFilm extends Document {
  name: string;
  genreIds: Schema.Types.ObjectId[];
  duration: number;
  trailerLink: string;
  ratings: {
    ratingValue: number;
    raterName: string;
  }[];
  filmImage: string;
  releaseDate: number;
  description: string;
}

interface IHall extends Document {
  name: string;
  numberOfRows: number;
  seatsOnRow: number;
}

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  status: string;
  photo: string;
}

interface IComment extends Document {
  content: string;
  filmId: Schema.Types.ObjectId;
}

interface ITranslation extends Document {
  ru: string;
  en: string;
}

export {
  ITicket,
  IGenre,
  ISession,
  IFilm,
  IHall,
  IUser,
  IComment,
  ITranslation
};
