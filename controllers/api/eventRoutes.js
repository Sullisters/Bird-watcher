const router = require('express').Router();
const { Event } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newEvent);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const events = await Event.findAll()
      res.status(200).json(events);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
  
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const eventData = await Event.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!eventData) {
        res.status(404).json({ message: 'No event found with this id' });
        return;
      }
  
      res.status(200).json(eventData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

module.exports = router;