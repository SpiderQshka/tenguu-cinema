import Joi from "@hapi/joi";
import { IFilm } from "../../interfaces/interfaces";

import { _IDREGEXP } from "../../keys/keys";

export const filmValidation = (data: IFilm) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    genreId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    duration: Joi.number()
      .min(60)
      .required(),
    trailerLink: Joi.string().required(),
    rating: Joi.number()
      .min(0)
      .max(10)
      .required()
  });
  return schema.validate(data);
};
