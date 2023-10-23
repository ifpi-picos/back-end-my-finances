import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get metas.');
});

router.post('/', (req, res) => {
  res.send('Post metas!');
});
router.put('/:id', (req, res) => {
  res.send('Put metas!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete metas!');
});

export default router;
