import * as productService from "../services/productServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllProducts = async (req, res) => {
  const result = await productService.listProducts();

  res.json(result);
};

export const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const result = await productService.getProductById({ _id: id });

  if (!result) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(result);
};

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  getOneProduct: ctrlWrapper(getOneProduct),
};
