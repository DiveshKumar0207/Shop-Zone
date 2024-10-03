import mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", CategorySchema);
