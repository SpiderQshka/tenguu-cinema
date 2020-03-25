import Joi from "@hapi/joi";
import { IFilm } from "../../interfaces/interfaces";
import { _IDREGEXP } from "../../keys/keys";
import { models } from "../../models/index";
import { Schema } from "mongoose";

export const filmValidation = async (
  data: IFilm
): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    name: Joi.string().required(),
    genres: Joi.array()
      .items(
        Joi.string()
          .pattern(_IDREGEXP)
          .required()
      )
      .required(),
    duration: Joi.number()
      .min(60)
      .required(),
    trailerLink: Joi.string().required(),
    ratings: Joi.array().items(
      Joi.object({
        ratingValue: Joi.number()
          .min(0)
          .max(10)
          .required(),
        raterName: Joi.string().required()
      }).optional()
    ),
    filmImage: Joi.string().optional(),
    releaseDate: Joi.date().required(),
    description: Joi.string().required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  const doesFilmGenresExists = async (
    genreIdsArray: Schema.Types.ObjectId[]
  ) => {
    const promises = genreIdsArray.map(
      async genreId => await models.Genre.findById(genreId.toString())
    );
    return await Promise.all(promises);
  };

  doesFilmGenresExists(data.genres).then(genres => {
    if (!genres.every(genre => !!genre))
      return { error: "Genre not found", code: 404 };
  });
  return { error: null, code: 200 };
};
