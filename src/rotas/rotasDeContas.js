import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get contas.');
});

router.post('/', (req, res) => {
  res.send('Post contas!');
});
router.put('/:id', (req, res) => {
  res.send('Put contas!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete contas!');
});

export default router;
