import express from "express"
import { addProduct, deleteProduct, featuredProducts, getAllProducts, getProductsMaxPrice, getProductsMinPrice, updateProduct } from "../src/controllers/productController.js";
export const productRouter = express.Router();

productRouter.route("/add").post(addProduct);
productRouter.route("/getAll").get(getAllProducts);
productRouter.route("/update/:id").put(updateProduct);
productRouter.route("/delete/:id").delete(deleteProduct);
productRouter.route("/featuredProducts").get(featuredProducts);
productRouter.route("/fetchMaxPrice/:price").get(getProductsMaxPrice);
productRouter.route("/fetchMinPrice/:price").get(getProductsMinPrice);


