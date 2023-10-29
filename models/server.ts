import express, {Application} from 'express';
import userRouters from '../routes/usuario';
import productRouters from '../routes/producto';
import marcaRouters from '../routes/marca';
import categoriaRouters from '../routes/categoria';
import cors from "cors";
import morgan from "morgan";
import database from '../database/connection';

class Server {
   
    private app: Application;
    private port: string;
    private apiPaths = {
        usuario: '/api/usuario',
        producto: '/api/producto',
        marca: '/api/marca',
        categoria:'/api/categoria'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '9000';
        this.DatabaseConnection();
        this.Middlewares();
        this.Routes();
    }

    async DatabaseConnection(){
        try{
            await database.authenticate();
            console.log('Database ON')

        }catch(error){
            console.log(error)
        }
    }

    Middlewares(){
        this.app.use( morgan("dev") );
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static("public") );
    }

    Routes(){
        this.app.use(this.apiPaths.usuario, userRouters),
        this.app.use(this.apiPaths.producto, productRouters),
        this.app.use(this.apiPaths.marca,marcaRouters),
        this.app.use(this.apiPaths.categoria,categoriaRouters);
    }

    Listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor escuchando desde el puerto: '+this.port)
        })
    }
}

export default Server;