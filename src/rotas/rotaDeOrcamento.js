import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get orçamento.');
});

router.post('/', (req, res) => {
  res.send('Post orçamento!');
});
router.put('/:id', (req, res) => {
  res.send('Put orçamento!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete orçamento!');
});

export default router;
