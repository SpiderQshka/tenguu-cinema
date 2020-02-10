import Joi from "@hapi/joi";
import { IHall } from "../../interfaces/interfaces";
import { models } from "../../models/index";

export const hallValidation = async (
  data: IHall
): Promise<{ error: string | null; code: number }> => {
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
  if (error) return { error: error.details[0].message, code: 400 };

  const doesHallNameExists = await models.Hall.findOne({ name: data.name });
  if (doesHallNameExists)
    return { error: "Hall name already exists", code: 400 };

  return { error: null, code: 200 };
};
