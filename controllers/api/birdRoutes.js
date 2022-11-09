const router = require('express').Router();
const { Bird } = require('../../models');
const axios = require("axios")

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

router.get('/', async (req, res) => {
  try {
    const birds = await Bird.findAll()
    res.status(200).json(birds);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);

  }
})

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
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/bird-api/:name', async (req,res) => {
  // const ninjasresponse = await request to api ninjas
  // res.json(ninjaresponse)
})

module.exports = router;
