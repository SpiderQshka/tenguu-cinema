import Joi from "@hapi/joi";
import {
  IComment,
  IGenre,
  IFilm,
  ISession,
  ITicket,
  IUser,
  IHall,
  ISeat
} from "../../interfaces";
import { _IDREGEXP } from "../../keys";

const registerValidation = (data: object) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });
  return schema.validate(data);
};

const loginValidation = (data: object) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

const commentValidation = (data: IComment) => {
  const schema = Joi.object({
    content: Joi.string()
      .min(20)
      .required(),
    filmId: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });
  return schema.validate(data);
};

const genreValidation = (data: IGenre) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .required()
  });
  return schema.validate(data);
};

const filmValidation = (data: IFilm) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    genreId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    duration: Joi.number().required(),
    trailerLink: Joi.string().required(),
    rating: Joi.number()
      .min(0)
      .max(10)
      .required()
  });
  return schema.validate(data);
};

const sessionValidation = (data: ISession) => {
  const schema = Joi.object({
    filmId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    dateTime: Joi.date().required(),
    price: Joi.number()
      .min(0)
      .required(),
    hallId: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });
  return schema.validate(data);
};

const ticketValidation = (data: ITicket) => {
  const schema = Joi.object({
    sessionId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    userId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    seatId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    status: Joi.string().required()
  });
  return schema.validate(data);
};

const userValidation = (data: IUser) => {
  const schema = Joi.object({
    username: Joi.string()
      .min(5)
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    status: Joi.string().required()
  });
  return schema.validate(data);
};

const hallValidation = (data: IHall) => {
  const schema = Joi.object({
    numberOfSeats: Joi.number()
      .min(1)
      .required(),
    seatsOnRow: Joi.number()
      .min(1)
      .required(),
    name: Joi.string()
      .min(1)
      .required()
  });
  return schema.validate(data);
};

const seatValidation = (data: ISeat) => {
  const schema = Joi.object({
    row: Joi.number()
      .min(0)
      .required(),
    seatNumber: Joi.number()
      .min(0)
      .required(),
    hallId: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });
  return schema.validate(data);
};

export {
  registerValidation,
  loginValidation,
  commentValidation,
  genreValidation,
  filmValidation,
  sessionValidation,
  ticketValidation,
  userValidation,
  hallValidation,
  seatValidation
};
