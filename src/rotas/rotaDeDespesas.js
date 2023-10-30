import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({})
  res.send(usuarios);
});

router.post('/', async (req, res) => {
  const usuario = req.body
  await prisma.usuario.create({
    data: usuario,
  })
  res.status(201).send('Usuario Salvo!');
});
router.put('/:id', (req, res) => {
  res.send('Put despesas!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete despesas!');
});

export default router;
