import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get relatorios.');
});

router.post('/', (req, res) => {
  res.send('Post relatorios!');
});
router.put('/:id', (req, res) => {
  res.send('Put relatorios!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete relatorios!');
});

export default router;
