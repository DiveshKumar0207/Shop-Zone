import mongoose from "mongoose";

export interface IPayment extends mongoose.Document {
  orderId: mongoose.Schema.Types.ObjectId;
  amount: number;
  transactionId: string;
  paymentMethod: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new mongoose.Schema<IPayment>(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: { type: Number, required: true },
    transactionId: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model<IPayment>("Payment", PaymentSchema);
