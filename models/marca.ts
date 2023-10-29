import { DataTypes } from "sequelize";
import database from "../database/connection";

export const Marca = database.define('Marca',
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    logo:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'Marca'
});