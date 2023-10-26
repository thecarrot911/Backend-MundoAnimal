import { Sequelize } from "sequelize";
// Agregar .ENV
const database = new Sequelize(
    'railway',
    'root',
    'CbbFh-BFh--34-36AhfeDccFADbd5dFF',
    {
        host: 'monorail.proxy.rlwy.net',
        port: 48308,
        dialect: 'mysql'
        //logging: false
    }
);

export default database;