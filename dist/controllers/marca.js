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
const marca_1 = require("../models/marca");
const MostrarTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const marcas = yield marca_1.Marca.findAll();
    res.json({ marcas });
});
exports.MostrarTodos = MostrarTodos;
const Mostrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marca = yield marca_1.Marca.findByPk(id);
    if (marca) {
        res.json(marca);
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el rut ${id}`
        });
    }
});
exports.Mostrar = Mostrar;
const Registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const marca = yield marca_1.Marca.build(body);
        yield marca.save();
        res.json(marca);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede registrar el producto'
        });
    }
});
exports.Registrar = Registrar;
const Modificar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const producto = yield marca_1.Marca.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: `No existe el producto`
            });
        }
        yield producto.update(body);
    }
    catch (error) {
    }
});
exports.Modificar = Modificar;
//# sourceMappingURL=marca.js.map