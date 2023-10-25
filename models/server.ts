import express, {Application} from 'express';
import userRouters from '../routes/usuario';
import cors from "cors";
import morgan from "morgan";
import path from "path";

class Server {
   
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '9000';
        this.Middlewares();
        this.Routes();
    }

    Middlewares(){
        this.app.use( morgan("dev") );
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static("public") );
    }

    Routes(){
        this.app.use(this.apiPaths.usuarios, userRouters)
    }

    Listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor escuchando desde el puerto: '+this.port)
        })
    }
}

export default Server;