import { Schema, Document } from "mongoose";

interface ITicket extends Document {
  session: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  seat: {
    row: number;
    seatNumber: number;
  };
}

interface IGenre extends Document {
  name: Schema.Types.ObjectId;
}

interface ISession extends Document {
  film: Schema.Types.ObjectId;
  dateTime: string;
  price: number;
  hall: Schema.Types.ObjectId;
}

interface IFilm extends Document {
  name: Schema.Types.ObjectId;
  genres: Schema.Types.ObjectId[];
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
  name: Schema.Types.ObjectId;
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

interface ITranslation extends Document {
  ru: string;
  en: string;
}

export { ITicket, IGenre, ISession, IFilm, IHall, IUser, ITranslation };
