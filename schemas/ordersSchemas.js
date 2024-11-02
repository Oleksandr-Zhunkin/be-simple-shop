import Joi from "joi";

export const createOrderSchema = Joi.object({
  userName: Joi.string().required(),
  userAddress: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  totalSum: Joi.number().required(),
  status: Joi.string().default("pending"),
});
