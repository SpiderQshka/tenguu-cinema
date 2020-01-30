import Joi from "@hapi/joi";
import { IComment, IGenre } from "../../interfaces";
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

export {
  registerValidation,
  loginValidation,
  commentValidation,
  genreValidation
};
