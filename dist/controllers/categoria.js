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
exports.Modificar = exports.Registrar = exports.Mostrar = exports.MostrarTodos = void 0;
const categoria_1 = require("../models/categoria");
const MostrarTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categorias = yield categoria_1.Categoria.findAll();
    res.json({ categorias });
});
exports.MostrarTodos = MostrarTodos;
const Mostrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoria_1.Categoria.findByPk(id);
    if (categoria) {
        res.json(categoria);
    }
    else {
        res.status(404).json({
            msg: `No existe la categoria con el identificador ${id}`
        });
    }
});
exports.Mostrar = Mostrar;
const Registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const categoria = yield categoria_1.Categoria.build(body);
        yield categoria.save();
        res.json(categoria);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "No se puede registrar la nueva categoria."
        });
    }
});
exports.Registrar = Registrar;
const Modificar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const categoria = yield categoria_1.Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                msg: `No existe el producto`
            });
        }
        yield categoria.update(body);
    }
    catch (error) {
        console.log(error);
    }
});
exports.Modificar = Modificar;
//# sourceMappingURL=categoria.js.map