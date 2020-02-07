import mongoose, { Mongoose } from "mongoose";
import { models } from "../models/index";
import {
  IGenre,
  IComment,
  ITicket,
  ISession,
  IFilm,
  IUser,
  IHall
} from "../interfaces/interfaces";

export const connectDb = async (url: string): Promise<Mongoose> => {
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

export const clearDb = async (): Promise<void> => {
  await mongoose.connection.db.dropDatabase();
};

export const clearCollection = async (
  collectionName: string
): Promise<void> => {
  try {
    await mongoose.connection.db.dropCollection(collectionName);
  } catch (e) {
    console.log("Collection doesn't exist");
  }
};

export const deleteGenre = async (options: {
  _id: string;
}): Promise<IGenre | null> => {
  return await models.Genre.findOneAndDelete(options);
};

export const deleteComment = async (options: {
  filmId?: string;
  _id?: string;
}): Promise<IComment | null | void> => {
  if (options._id) return await models.Comment.findOneAndDelete(options);
  await models.Comment.deleteMany(options);
};

export const deleteTicket = async (options: {
  _id?: string;
  sessionId?: string;
  userId?: string;
}): Promise<ITicket | null | void> => {
  if (options._id) return await models.Ticket.findOneAndDelete(options);
  await models.Ticket.deleteMany(options);
};

export const deleteSession = async (options: {
  _id?: string;
  hallId?: string;
  filmId?: string;
}): Promise<ISession | null | void> => {
  if (options._id) {
    await deleteTicket({ sessionId: options._id });
    return await models.Session.findOneAndDelete({ _id: options._id });
  } else {
    const sessionsForDelete = await models.Session.find(options);
    sessionsForDelete.forEach(async session => {
      await deleteTicket({ sessionId: session._id });
    });
    await models.Session.deleteMany(options);
  }
};

export const deleteFilm = async (options: {
  _id?: string;
  genreId?: string;
}): Promise<IFilm | null | void> => {
  if (options._id) {
    await deleteSession({ filmId: options._id });
    await deleteComment({ filmId: options._id });
    return await models.Film.findOneAndDelete({ _id: options._id });
  } else {
    const filmsForDelete = await models.Film.find(options);
    filmsForDelete.forEach(async film => {
      await deleteSession({ filmId: film._id });
      await deleteComment({ filmId: options._id });
    });
    await models.Session.deleteMany(options);
  }
};

export const deleteUser = async (options: {
  _id: string;
}): Promise<IUser | null> => {
  await models.Ticket.deleteMany({ userId: options._id });
  return await models.User.findOneAndDelete({ _id: options._id });
};

export const deleteHall = async (options: {
  _id: string;
}): Promise<IHall | null> => {
  await deleteSession({ hallId: options._id });
  return await models.Hall.findOneAndDelete({ _id: options._id });
};
