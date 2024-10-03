import mongoose from "mongoose";

export interface ICart extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  items: [
    {
      productId: mongoose.ObjectId;
      quantity: number;
      price: number;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}

const CartSchema = new mongoose.Schema<ICart>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model<ICart>("Cart", CartSchema);
