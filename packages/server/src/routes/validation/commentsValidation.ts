import Joi from "@hapi/joi";
import { IComment } from "../../interfaces/interfaces";
import { _IDREGEXP } from "../../keys/keys";
import { models } from "../../models/index";

export const commentValidation = async (
  data: IComment
): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    content: Joi.string()
      .min(20)
      .required(),
    filmId: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  const film = await models.Film.findById(data.filmId);
  if (!film) return { error: "Film not found", code: 404 };

  return { error: null, code: 200 };
};
