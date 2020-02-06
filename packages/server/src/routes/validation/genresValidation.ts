import Joi from "@hapi/joi";
import { IGenre } from "../../interfaces/interfaces";
import { models } from "../../models/index";

export const genreValidation = async (data: IGenre): Promise<string | null> => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const doesGenreExists = await models.Genre.findOne({ name: data.name });
  if (doesGenreExists) return "Genre already exists";

  return null;
};
