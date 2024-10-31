import express from "express";

import productControllers from "../controllers/productControllers.js";

const ProductRouter = express.Router();

ProductRouter.get("/", productControllers.getAllProducts);

ProductRouter.get("/:id", productControllers.getOneProduct);

export default ProductRouter;
