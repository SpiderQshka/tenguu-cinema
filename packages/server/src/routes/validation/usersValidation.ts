import Joi from "@hapi/joi";
import { IUser } from "../../interfaces/interfaces";
import models from "../../models/index";

export const userValidation = async (data: IUser): Promise<string | null> => {
  const schema = Joi.object({
    username: Joi.string()
      .min(5)
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    status: Joi.string().required()
  });

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const doesEmailExists = await models.User.findOne({ email: data.email });
  if (doesEmailExists) return "Email already exists";

  return null;
};
