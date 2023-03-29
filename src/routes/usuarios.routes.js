import { Router} from 'express';
import { getUsuarios, createUsuario, updateUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', getUsuarios);

router.post('/usuarios', createUsuario);

router.put('/usuarios', updateUsuario);

export default router;