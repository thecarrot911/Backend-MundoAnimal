import { DataTypes } from "sequelize";
import database from "../database/connection";

const Usuario = database.define('Usuario',
{
    rut:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    clave:{
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    estado: { 
        type: DataTypes.BOOLEAN
    }
},
{
    tableName: 'Usuario',
});

export default Usuario;