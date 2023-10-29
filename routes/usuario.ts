import { Router } from "express"; 
import * as Usuario from "../controllers/usuario";

const router = Router();

router.get('/', Usuario.MostrarTodos);
router.get('/:id', Usuario.Mostrar);
router.post('/', Usuario.Registrar);
router.put('/:id', Usuario.Modificar);
router.delete('/:id', Usuario.Eliminar);

export default router;