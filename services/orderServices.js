import Order from "../models/Order.js";

export const addOrder = async (data) => {
  return Order.create(data);
};
