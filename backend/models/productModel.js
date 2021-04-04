import mongoose from "mongoose";
import { PRODUCT_MODEL_NAME, USER_MODEL_NAME } from "../constants/constants.js";

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const productSchema = mongoose.Schema(
  {
    user: {
      /*field that indicates which admin created which product, only admins can create products*/
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: USER_MODEL_NAME,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const ProductModel = mongoose.model(PRODUCT_MODEL_NAME, productSchema);

export default ProductModel;
