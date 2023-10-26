"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Agregar .ENV
const database = new sequelize_1.Sequelize('MundoAnimal', 'root', 'mundoanimal', {
    host: 'localhost',
    port: 8200,
    dialect: 'mysql'
    //logging: false
});
exports.default = database;
//# sourceMappingURL=connection.js.map