import Joi from "@hapi/joi";
import { IGenre } from "../../interfaces/interfaces";
import { models } from "../../models/index";

export const genreValidation = async (
  data: IGenre
): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  const doesGenreExists = await models.Genre.findOne({ name: data.name });
  if (doesGenreExists) return { error: "Genre already exists", code: 400 };

  return { error: null, code: 200 };
};
