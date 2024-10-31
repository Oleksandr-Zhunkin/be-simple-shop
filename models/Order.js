import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
    ],
    totalSum: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

export default Order;
