"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stockRouters_1 = require("./stockRouters");
const prisma_1 = require("./prisma");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/stock", stockRouters_1.stockRouter);
const port = 3000;
app.listen(port, () => {
    (0, prisma_1.prisma)();
    console.log(`server is running on port ${port}`);
});
