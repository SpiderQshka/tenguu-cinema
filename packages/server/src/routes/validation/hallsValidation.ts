import Joi from "@hapi/joi";
import { IHall } from "../../interfaces/interfaces";

export const hallValidation = (data: IHall) => {
  const schema = Joi.object({
    numberOfRows: Joi.number()
      .min(1)
      .required(),
    seatsOnRow: Joi.number()
      .min(1)
      .required(),
    name: Joi.string()
      .min(1)
      .required()
  });
  return schema.validate(data);
};
