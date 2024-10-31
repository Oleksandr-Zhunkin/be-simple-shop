import Product from "../models/Product.js";

export const listProducts = () => {
  return Product.find();
};

export const getProductById = (filter) => {
  return Product.findOne(filter);
};
