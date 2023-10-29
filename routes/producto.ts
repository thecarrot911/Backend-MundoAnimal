import { Router } from "express";
import * as Producto from "../controllers/producto";

const router = Router();
router.get('/', Producto.MostrarTodos);
router.get('/:id');
router.post('/', );
router.put('/:id',);
router.delete('/:id',);

export default router;