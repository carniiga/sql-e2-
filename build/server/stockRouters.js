"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockRouter = void 0;
const express_1 = __importDefault(require("express"));
const stockControllers_1 = require("./stockControllers");
exports.stockRouter = express_1.default.Router();
exports.stockRouter.get("/id/:id", stockControllers_1.getStockById);
exports.stockRouter.get("/", stockControllers_1.getAllStock);
exports.stockRouter.post("/create", stockControllers_1.postProduct);
exports.stockRouter.delete("/id/:id", stockControllers_1.deleteProduct);
exports.stockRouter.put("/id/:id", stockControllers_1.updateProduct);
