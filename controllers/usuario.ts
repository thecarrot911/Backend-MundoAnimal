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
    const { body } = req;
    const { id } = req.params;
    try{
        const usuario = await Usuario.findByPk(id);
        if (! usuario){
            return res.status(404).json({
                msg: `No existe el usuario con el rut ${id}`
            })
        }
        await usuario.update(body);
        res.json(usuario);

    }catch(error){
        console.log(error)
        console.error(error)
        res.status(500).json({
            msg: ''+error        
        })
    }
}
export const Eliminar = async(req: Request, res: Response) =>{
    const { id } = req.params;
    try{
        const usuario = await Usuario.findByPk(id);
        if (! usuario){
            return res.status(404).json({
                msg: `No existe el usuario con el rut ${id}`
            })
        }
        await usuario.destroy();// cuidado con las referencias.
        // se puede usar el estado para elimianr de forma logica con 0 en estado.

    }catch(error){

    }
    
    res.json({
        msg: 'Borrar'
    })
}