import express from "express";

import orderControllers from "../controllers/orderControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createOrderSchema } from "../schemas/ordersSchemas.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  validateBody(createOrderSchema),
  orderControllers.createOrder
);

export default orderRouter;
