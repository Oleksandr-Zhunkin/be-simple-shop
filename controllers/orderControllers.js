import * as orderServices from "../services/orderServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const createOrder = async (req, res) => {
  const { userName, userAddress, products, totalSum } = req.body;

  const result = await orderServices.addOrder({
    userName,
    userAddress,
    products,
    totalSum,
  });
  res.json(result);
};

export default { createOrder: ctrlWrapper(createOrder) };
