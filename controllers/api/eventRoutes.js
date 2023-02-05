const router = require('express').Router();
const { Event, Bird } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create({
        ...req.body,
        UserId: req.session.user_id,
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

  router.get('/:id', async (req, res) => {
    try {
      const events = await Event.findByPk(req.params.id, {
        include: [Bird]
      })
      res.status(200).json(events);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
  
    }
  })

//   router.put("/events",(req,res)=>{
//     if(!req.session.logged_in){
//         return res.redirect("/login")
//     }
//     Event.update({
//         event_image: req.body.event_image},{
//           include: [Bird],
//         where: {
//             id: req.session.event_id
//         },
//     }).then(data=>{
//         if(!data) {
//             res.status(404).json({msg: `Upload unsuccessful!`})
//           }
//         console.log(data)
//         res.render("journal", data);
//     })
// })

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