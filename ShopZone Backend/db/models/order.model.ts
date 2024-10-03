import mongoose from "mongoose";

export interface IOrder extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  cartId: mongoose.Schema.Types.ObjectId;
  totalOrder: number;
  status: "pending" | "shipped" | "delivered";
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    totalOrder: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
    paymentMethod: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model<IOrder>("Order", OrderSchema);
