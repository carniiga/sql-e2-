import express   from "express";
import { deleteProduct, getAllStock, getStockById, postProduct, updateProduct } from "./stockControllers";


export const stockRouter = express.Router()

stockRouter.get("/id/:id" , getStockById)
stockRouter.get("/" , getAllStock)
stockRouter.post("/create" , postProduct)
stockRouter.delete("/id/:id" , deleteProduct)
stockRouter.put("/id/:id" , updateProduct)