const router = require('express').Router();
const { Bird } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newBird = await Bird.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBird);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const birdData = await Bird.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!birdData) {
      res.status(404).json({ message: 'No bird found with this id' });
      return;
    }

    res.status(200).json(birdData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
