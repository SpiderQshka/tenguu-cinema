import Joi from "@hapi/joi";
import { IGenre } from "../../interfaces/interfaces";

export const genreValidation = (data: IGenre) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .required()
  });
  return schema.validate(data);
};
