import express from "express";

import categoryControllers from "../controllers/categoryControllers.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryControllers.getCategories);

export default categoryRouter;
