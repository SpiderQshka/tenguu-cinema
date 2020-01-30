import mongoose, { Mongoose } from "mongoose";
import User from "./user.model";
import Comment from "./comment.model";
import Genre from "./genre.model";
import Seat from "./seat.model";
import Film from "./film.model";
import Hall from "./hall.model";
import Ticket from "./ticket.model";
import Session from "./session.model";

const connectDb = (url: string): Promise<Mongoose> => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

const models = { User, Comment, Genre, Seat, Film, Hall, Ticket, Session };
export { connectDb };
export default models;
