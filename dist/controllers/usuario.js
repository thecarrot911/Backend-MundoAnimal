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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrar = exports.Modificar = exports.Registrar = exports.Mostrar = exports.MostrarTodos = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const MostrarTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.MostrarTodos = MostrarTodos;
const Mostrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (user) {
        res.json(user);
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
        const usuario = yield usuario_1.default.build(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede registrar el usuario'
        });
    }
});
exports.Registrar = Registrar;
const Modificar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Modificar'
    });
});
exports.Modificar = Modificar;
const Borrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Borrar'
    });
});
exports.Borrar = Borrar;
//# sourceMappingURL=usuario.js.map