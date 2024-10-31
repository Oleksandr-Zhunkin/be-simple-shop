import * as categoryService from "../services/categoryServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getCategories = async (req, res) => {
  const result = await categoryService.listCategories();
  res.json(result);
};

export default { getCategories: ctrlWrapper(getCategories) };
