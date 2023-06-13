import { ProductType } from "./types/ProductType";
import { prisma } from "../server/prisma";
export  const createProduct  = async  function (product : ProductType) {
    const db = prisma();
    const create =  await db.products.create({
        data:{
        name : product.name ,
        description : product.description,
        price : product.price ,
        picture : product.picture ,
       
        },
    })
    return  create;

}