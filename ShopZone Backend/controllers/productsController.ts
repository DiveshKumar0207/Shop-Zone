import { Request, Response, NextFunction } from "express";
import { validationResult, matchedData } from "express-validator";
import { ProductModel } from "../db/models/product.mode";

// ADMIN - to get all products details /api/get-all-products
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find({});

    if (!products) {
      res.status(404).json({ message: "No Products Available" });
    }

    res.status(200).json({ message: "success", products: products });
  } catch (error) {
    next(error);
  }
};

export { getAllProducts };
