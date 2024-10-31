import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Category = model("category", categorySchema);

export default Category;
