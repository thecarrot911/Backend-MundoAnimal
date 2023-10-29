import { DataTypes } from "sequelize";
import database from "../database/connection";

const Producto = database.define('Producto',
{
    codigo_barra:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    precio_kilo:{
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    precio_unitario:{
        type:DataTypes.DOUBLE,
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: true
    },
    Marca_id:{
        type: DataTypes.INTEGER
    },
    Categoria_id:{
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'Producto',

});

export default Producto;