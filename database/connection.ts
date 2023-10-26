import { Sequelize } from "sequelize";
// Agregar .ENV
const database = new Sequelize('MundoAnimal','root','mundoanimal',{
    host: 'localhost',
    port: 8200,
    dialect: 'mysql'
    //logging: false
});

export default database;