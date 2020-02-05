import Joi from "@hapi/joi";
import models from "../../models/index";
import { IUser } from "../../interfaces/interfaces";
import bcrypt from "bcryptjs";

const registerValidation = async (data: IUser): Promise<string | null> => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const doesEmailExists = models.User.findOne({ email: data.email });
  if (doesEmailExists) return "Email already exists";

  return null;
};

const loginValidation = async (data: IUser): Promise<string | null> => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  const dbUser = await models.User.findOne({ email: data.email });
  if (!dbUser) return "Email doesn't exists";

  const validPassword = await bcrypt.compare(data.password, dbUser.password);
  if (!validPassword) return "Invalid password";

  return null;
};

export { registerValidation, loginValidation };
