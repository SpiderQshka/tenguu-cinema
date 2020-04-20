import Joi from "@hapi/joi";
import { IUser } from "../../interfaces/interfaces";
import { models } from "mongoose";

export const userValidation = async (
  data: IUser,
  currentUserId?: string
): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    username: Joi.string().min(5),
    password: Joi.string().min(6),
    email: Joi.string().email(),
    status: Joi.string(),
    photo: Joi.string()
      .optional()
      .allow(""),
    ticketIds: Joi.array(),
    tickets: Joi.array().optional(),
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  if (currentUserId) {
    const userWithTheSameEmail = await models.User.findOne({
      email: data.email,
    });
    if (userWithTheSameEmail._id.toString() !== currentUserId)
      return { error: "Email already exists", code: 400 };
  }

  return { error: null, code: 200 };
};
