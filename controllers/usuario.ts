import { Request, Response } from 'express';
import Usuario from "../models/usuario";

export const MostrarTodos = async(req: Request, res: Response) =>{
    const usuarios = await Usuario.findAll();   
    res.json(usuarios)
}
export const Mostrar = async(req: Request, res: Response) =>{
    res.json({
        msg: 'Mostrar'
    })
}
export const Registrar = async(req:Request, res:Response) =>{
    res.json({
        msg: 'Registrar'
    })
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