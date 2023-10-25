"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '9000';
        this.Middlewares();
        this.Routes();
    }
    Middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    Routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando desde el puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map