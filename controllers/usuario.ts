import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const MostrarTodos = async(req: Request, res: Response) =>{
    const usuarios = await Usuario.findAll();   
    res.json({usuarios});
}
export const Mostrar = async(req: Request, res: Response) =>{
    const { id } = req.params
    const user = await Usuario.findByPk(id);
    if (user){
        res.json(user);
    }else{
        res.status(404).json({
            msg: `No existe el usuario con el rut ${id}`
        });
    }
}

export const Registrar = async(req:Request, res:Response) =>{
    const { body } = req;
    try{
        const usuario = await Usuario.build(body)
        await usuario.save();
        res.json(usuario)

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'No se puede registrar el usuario'
        })
    }
}

export const Modificar = async(req: Request, res: Response) =>{
    res.json({
        msg: 'Modificar'
    })
}
export const Borrar = async(req: Request, res: Response) =>{
    res.json({
        msg: 'Borrar'
    })
}