import Joi from "@hapi/joi";

const registerValidation = (data: object) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });
  return schema.validate(data);
};

const loginValidation = (data: object) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

export { registerValidation, loginValidation };
