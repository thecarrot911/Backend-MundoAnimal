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
exports.Borrar = exports.Modificar = exports.Registrar = exports.Mostrar = exports.MostrarTodos = void 0;
const MostrarTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'MostrarTodos'
    });
});
exports.MostrarTodos = MostrarTodos;
const Mostrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Mostrar'
    });
});
exports.Mostrar = Mostrar;
const Registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'Registrar'
    });
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