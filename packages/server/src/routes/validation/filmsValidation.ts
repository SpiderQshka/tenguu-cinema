import Joi from "@hapi/joi";
import { IFilm } from "../../interfaces/interfaces";
import { _IDREGEXP } from "../../keys/keys";
import { models } from "../../models/index";

export const filmValidation = async (data: IFilm): Promise<string | null> => {
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

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const doesFilmExists = await models.Film.findOne({ name: data.name });
  if (doesFilmExists) return "Film name already exists";

  const filmGenre = await models.Genre.findById(data.genreId);
  if (!filmGenre) return "Genre not found";

  return null;
};
