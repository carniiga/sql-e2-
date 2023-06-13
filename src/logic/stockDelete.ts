import { prisma } from "../server/prisma";

export const deleteStock = async function (idProd : any){
  const db = prisma()
  const deleteProduct = db.products.delete({where : {id : idProd}})
  return deleteProduct
}