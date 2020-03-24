import Joi from "@hapi/joi";

export const emailValidation = async (data: {
  username: string;
  email: string;
  message: string;
}): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    message: Joi.string().required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  return { error: null, code: 200 };
};
