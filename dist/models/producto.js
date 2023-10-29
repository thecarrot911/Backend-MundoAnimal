"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Producto = connection_1.default.define('Producto', {
    codigo_barra: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    precio_kilo: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true
    },
    precio_unitario: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Marca_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Categoria_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'Producto',
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map