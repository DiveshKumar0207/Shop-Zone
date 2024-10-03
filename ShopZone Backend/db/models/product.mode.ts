import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  categories: mongoose.ObjectId[];
  stock: number;
  images: string[];
  reviews: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    categories: [
      {
        type: String,
        required: true,
      },
    ],
    stock: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
