"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Agregar .ENV
const database = new sequelize_1.Sequelize('railway', 'root', 'CbbFh-BFh--34-36AhfeDccFADbd5dFF', {
    host: 'monorail.proxy.rlwy.net',
    port: 48308,
    dialect: 'mysql'
});
exports.default = database;
//# sourceMappingURL=connection.js.map