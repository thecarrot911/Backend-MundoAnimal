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
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const producto_1 = __importDefault(require("../routes/producto"));
const marca_1 = __importDefault(require("../routes/marca"));
const categoria_1 = __importDefault(require("../routes/categoria"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: '/api/usuario',
            producto: '/api/producto',
            marca: '/api/marca',
            categoria: '/api/categoria'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '9000';
        this.DatabaseConnection();
        this.Middlewares();
        this.Routes();
    }
    DatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database ON');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    Middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    Routes() {
        this.app.use(this.apiPaths.usuario, usuario_1.default),
            this.app.use(this.apiPaths.producto, producto_1.default),
            this.app.use(this.apiPaths.marca, marca_1.default),
            this.app.use(this.apiPaths.categoria, categoria_1.default);
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando desde el puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map