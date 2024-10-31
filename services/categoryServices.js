import Category from "../models/Category.js";

export const listCategories = async () => {
  return await Category.find();
};
