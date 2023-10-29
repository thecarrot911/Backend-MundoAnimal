import { Request, Response } from 'express';
import Producto from '../models/producto';

export const MostrarTodos = async(req: Request, res:Response) =>{
    const productos = await Producto.findAll();
    res.json({productos})
}

export const Mostrar = async(req: Request, res:Response) =>{
    const { id } = req.params;
    const user = await Producto.findByPk(id);
    if(user){   
        res.json(user);
    }else{
        res.status(404).json({
            msg:`No existe el usuario con el rut ${id}`
        })
    }
}

export const Registrar = async(req:Request, res:Response) =>{
    const { body } = req;
    try{
        const producto = await Producto.build(body);
        await producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'No se puede registrar el producto'
        })
    }
}

export const Modificar = async(req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;

    try{
        const producto = await Producto.findByPk(id)
        if(! producto){
            return res.status(404).json({
                msg: `No existe el producto`
            })
        }
        await producto.update(body);
    }catch(error){

    
    }
}

