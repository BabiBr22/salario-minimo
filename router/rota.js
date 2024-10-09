import express from 'express';
const router = express.Router();

import { listaEvento, cadastroEvento, detalheEvento } from '../controller/control.js';

router.post('/cadastro', cadastroEvento);
router.get('/lista', listaEvento); // Confirme que isso está correto
router.get('/descricao', detalheEvento);


export default router;