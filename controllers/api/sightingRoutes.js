const router = require('express').Router();
const { Sighting } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newSighting = await Sighting.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newSighting);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get('/', async (req, res) => {
  try {
    const sightings = await Sighting.findAll()
    res.status(200).json(sightings);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  
  }
})

module.exports = router;