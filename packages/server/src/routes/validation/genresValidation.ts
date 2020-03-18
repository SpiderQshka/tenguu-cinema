import Joi from "@hapi/joi";
import { IGenre } from "../../interfaces/interfaces";

export const genreValidation = async (
  data: IGenre,
  areFieldsRequired: boolean = true
): Promise<{ error: string | null; code: number }> => {
  const schema = areFieldsRequired
    ? Joi.object({
        name: Joi.string().required()
      })
    : Joi.object({
        name: Joi.string().optional()
      });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  // const doesGenreExists = await models.Genre.findOne({ name: data.name });
  // if (doesGenreExists) return { error: "Genre already exists", code: 400 };

  return { error: null, code: 200 };
};
