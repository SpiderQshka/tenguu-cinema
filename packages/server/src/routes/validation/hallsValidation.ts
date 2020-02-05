import Joi from "@hapi/joi";
import { IHall } from "../../interfaces/interfaces";
import models from "../../models/index";

export const hallValidation = async (data: IHall): Promise<string | null> => {
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

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const doesHallNameExists = await models.Hall.findOne({ name: data.name });
  if (doesHallNameExists) return "Hall name already exists";

  return null;
};
