import { Request, Response } from 'express';


export const MostrarTodos = async(req: Request, res: Response) =>{
    res.json({
        msg: 'MostrarTodos'
    })
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