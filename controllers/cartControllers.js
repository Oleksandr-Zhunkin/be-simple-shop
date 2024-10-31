import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as cartServices from "../services/cartServices.js";

export const createCart = async (req, res) => {
  const { id, quantity } = req.body;

  const result = await cartServices.checkAvailability({ _id: id, quantity });

  if (!result) {
    return res.json({ message: "Insufficient quantity of goods available!" });
  }

  res.json({ message: "Add to cart" });
};

export default { createCart: ctrlWrapper(createCart) };
