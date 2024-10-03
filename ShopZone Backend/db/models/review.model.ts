import mongoose from "mongoose";

export interface IReview extends mongoose.Document {
  productId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  comment: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model<IReview>("Review", ReviewSchema);
