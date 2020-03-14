import Joi from "@hapi/joi";
import { IGenre, ITranslation } from "../../interfaces/interfaces";
import { models } from "../../models/index";

export const translationValidation = async (data: {
  ru: string;
  en: string;
}): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    ru: Joi.string()
      .min(1)
      .required(),
    en: Joi.string()
      .min(1)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  return { error: null, code: 200 };
};
