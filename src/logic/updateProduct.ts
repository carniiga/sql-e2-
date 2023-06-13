import {prisma} from "../server/prisma"
import { ProductType } from "./types/ProductType"

export const updateProd = async function (product : ProductType , id : string){
    const db = prisma();
    const updateProduct = await db.products.update({
        where : {
           id : id,
        },
        data : {
            name: product.name,
            description : product.description,
            price : product.price,
            picture : product.picture


    
        },
    })
    return updateProduct
}