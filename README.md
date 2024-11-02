Simple Shop This project is the back-end component of a web store built using Node.js and MongoDB. 

To connect to data base use env.example

Base url - https://be-simple-shop-production.up.railway.app

End points: 
- GET /api/products - Retrieve a list of products.
- GET /api/products/:id - Retrieve specific product details.
- GET /api/categories - Retrieve categories.
- POST /api/cart - Add items to the cart.
- POST /api/orders - Create an order.

Schemas: 
- product
 const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
  );


- Order
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
        productId: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true, 
        },
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

- Category
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
