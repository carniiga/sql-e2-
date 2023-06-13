import express from "express";
import { stockRouter } from "./stockRouters";
import { prisma } from "./prisma";

const app = express();

app.use(express.json())

app.use("/api/stock", stockRouter)
const port = 3000;

app.listen(port , ()=> {
    prisma()
    console.log(`server is running on port ${port}`)
} )

