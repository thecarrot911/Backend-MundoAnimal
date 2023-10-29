import { DataTypes } from "sequelize";
import database from "../database/connection";

export const Categoria = database.define('Categoria',
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    tableName: 'Categoria'
});
