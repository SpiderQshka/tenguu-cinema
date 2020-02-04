import Joi from "@hapi/joi";
import { IComment } from "../../interfaces/interfaces";

import { _IDREGEXP } from "../../keys/keys";

export const commentValidation = (data: IComment) => {
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
