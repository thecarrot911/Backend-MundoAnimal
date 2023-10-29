import { Request, Response } from 'express';
import { Marca } from '../models/marca';

export const MostrarTodos = async(req: Request, res:Response) =>{
    const marcas = await Marca.findAll();
    res.json({marcas})
}

export const Mostrar = async(req: Request, res:Response) =>{
    const { id } = req.params;
    const marca = await Marca.findByPk(id);
    if(marca){   
        res.json(marca);
    }else{
        res.status(404).json({
            msg:`No existe el usuario con el rut ${id}`
        })
    }
}

export const Registrar = async(req:Request, res:Response) =>{
    const { body } = req;
    try{
        const marca = await Marca.build(body);
        await marca.save();
        res.json(marca);
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
        const producto = await Marca.findByPk(id)
        if(! producto){
            return res.status(404).json({
                msg: `No existe el producto`
            })
        }
        await producto.update(body);
    }catch(error){

    
    }
}

