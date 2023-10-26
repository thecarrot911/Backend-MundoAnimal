"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Usuario = connection_1.default.define('Usuario', {
    rut: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    clave: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    tableName: 'Usuario',
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map