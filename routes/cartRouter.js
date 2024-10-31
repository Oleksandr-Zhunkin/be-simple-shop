import express from "express";

import cartControllers from "../controllers/cartControllers.js";

const cartRouter = express.Router();

cartRouter.post("/", cartControllers.createCart);

export default cartRouter;
