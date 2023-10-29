import { Request, Response } from 'express';
import { Categoria } from '../models/categoria';

export const MostrarTodos = async(req: Request, res:Response) =>{
    const categorias = await Categoria.findAll();
    res.json({categorias})
}

export const Mostrar = async(req: Request, res:Response) =>{
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if(categoria){   
        res.json(categoria);
    }else{
        res.status(404).json({
            msg:`No existe la categoria con el identificador ${id}`
        })
    }
}

export const Registrar = async(req:Request, res:Response) =>{
    const { body } = req;
    try{
        const categoria = await Categoria.build(body);
        await categoria.save();
        res.json(categoria);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"No se puede registrar la nueva categoria."
        })
    }
}

export const Modificar = async(req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;

    try{
        const categoria = await Categoria.findByPk(id)
        if(! categoria){
            return res.status(404).json({
                msg: `No existe el producto`
            })
        }
        await categoria.update(body);
    }catch(error){
        console.log(error)
    }
}