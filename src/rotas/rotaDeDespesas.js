import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get despesas.');
});

router.post('/', (req, res) => {
  res.send('Post despesas!');
});
router.put('/:id', (req, res) => {
  res.send('Put despesas!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete despesas!');
});

export default router;
