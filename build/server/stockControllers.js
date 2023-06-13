"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.postProduct = exports.getAllStock = exports.getStockById = void 0;
const stockCreate_1 = require("../logic/stockCreate");
const prisma_1 = require("./prisma");
const stockDelete_1 = require("../logic/stockDelete");
const updateProduct_1 = require("../logic/updateProduct");
const getStockById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = (0, prisma_1.prisma)();
        const id = req.params.id;
        const browser = yield db.products.findUnique({ where: { id: id } });
        res.send(browser);
    });
};
exports.getStockById = getStockById;
const getAllStock = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = (0, prisma_1.prisma)();
        const browserAll = yield db.products.findMany();
        res.send(browserAll);
    });
};
exports.getAllStock = getAllStock;
const postProduct = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = (0, prisma_1.prisma)();
        const product = req.body;
        const create = yield (0, stockCreate_1.createProduct)(product);
        res.send(create);
    });
};
exports.postProduct = postProduct;
const deleteProduct = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = req.params.id;
        const deleteProd = yield (0, stockDelete_1.deleteStock)(productId);
        res.send(`el producto con el id ${productId} ha sido eliminado `);
    });
};
exports.deleteProduct = deleteProduct;
const updateProduct = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = req.body;
        const id = req.params.id;
        const productUpdate = yield (0, updateProduct_1.updateProd)(product, id);
        res.send(productUpdate);
    });
};
exports.updateProduct = updateProduct;
