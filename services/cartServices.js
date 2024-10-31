import Product from "../models/Product.js";

export const checkAvailability = async (filter) => {
  const { _id, quantity } = filter;

  const product = await Product.findOne({ _id });

  if (product.quantity < quantity) {
    return false;
  }

  return product;
};
