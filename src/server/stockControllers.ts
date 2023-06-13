import  express, { NextFunction }  from "express";
import { createProduct } from "../logic/stockCreate";
import { prisma } from "./prisma";
import { deleteStock } from "../logic/stockDelete";
import { updateProd } from "../logic/updateProduct";

export const getStockById = async function  (req: express.Request , res : express.Response , next: express.NextFunction){
    const db = prisma() 
    const id = req.params.id
    const browser =  await db.products.findUnique({where : {id : id}})
    res.send(browser)
}
export const getAllStock = async function  (req: express.Request , res : express.Response , next: express.NextFunction){
    const db = prisma() 
    const browserAll =  await db.products.findMany()
    res.send(browserAll)
}


export const postProduct  = async  function   (req: express.Request , res : express.Response , next: express.NextFunction){
    const db = prisma() 
    const product = req.body
    const create = await createProduct(product)
    res.send(create)
 
}

export const deleteProduct = async function (req: express.Request , res : express.Response , next : express.NextFunction){
    const productId  = req.params.id ;
    const deleteProd = await deleteStock(productId)
   
    res.send(`el producto con el id ${productId} ha sido eliminado `)
}

export const updateProduct = async function (req : express.Request , res : express.Response , next : NextFunction){
    const product = req.body
    const id = req.params.id
    const productUpdate = await updateProd(product , id)
    res.send(productUpdate)
}