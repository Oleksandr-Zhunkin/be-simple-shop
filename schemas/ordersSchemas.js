import Joi from "joi";

export const createOrderSchema = Joi.object({
  userName: Joi.string().required(),
  userAddress: Joi.string().required(),
  products: Joi.array().items(Joi.string()).required(),
  totalSum: Joi.number().required(),
  status: Joi.string().default("pending"),
});
