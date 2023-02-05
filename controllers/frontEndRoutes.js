const express = require('express');
const router = require('express').Router();
const {User,Bird,Event, Sighting} = require('../models');
const axios = require('axios');


router.get("/", async (req,res)=>{
    res.render("home")
})

//THIS WORKS PLEASE DO NOT CHANGE -PHILIP-
router.get("/login",(req,res)=>{
    if (req.session.logged_in){
        res.redirect('/events');
        return;
    }
    res.render("login", {
        loggedIn: false,
        userId: null,
    });
});

router.get("/users/:id", (req, res) => {
    if (!req.session.logged_in) {
      return res.redirect(`/login`);
    }
    User.findByPk(req.params.id, {
        include:[Event],
    })
      .then((foundUser) => {
        const hbsUser = foundUser.get({ plain: true });
        console.log(hbsUser);
        hbsUser.loggedIn = true;
        hbsUser.userId = req.session.userId;
        if (hbsUser.id === req.session.userId) {
          hbsUser.isMyProfile = true;
        }
      })
      .then(res.render("event"));
  });

router.get("/newAccount", (req, res) => {

    console.log(req.session.logged_in);
    if (req.session.logged_in) {
     return res.redirect('/');
    } 
    res.render('newAccount');
})


router.get("/events",(req,res)=>{
    if (!req.session.logged_in){
        return res.redirect("/login")
    }
   Event.findAll({
    where: {
        UserId: req.session.user_id
    }
   }).then(events=>{
    const eventsHbsData = events.map(event=>event.get({plain:true}))
    res.render("event", {
        events:eventsHbsData
        })
    })
})

// router.get("/events", (req, res) => {
//     if(!req.session.logged_in) {
//       return res.redirect("/login")
//     }
//     User.findByPk(req.session.user_id, {
//       include:[Event]
//     }).then(userData=>{
//       const hbsData = userData.get({plain:true});
//       console.log(hbsData)
     
//       res.render("event", hbsData)
//     })
// })



router.get("/events/:id",(req,res)=>{
    if (!req.session.logged_in){
        return res.redirect("/login")
    } 
   Event.findByPk().then(events=>{
    const eventsHbsData = events.get({plain:true})
    res.render("journal", {events:eventsHbsData})
    })
})


router.get("/journal/:id", (req,res)=>{
    Event.findByPk(req.params.id,{
        include:[Bird]
    }).then(foundEvent => {
        const event = foundEvent.get({plain: true})
        console.log
        res.render("journal", {event})    
    });
})

// router.get("/journal/:id", (req,res)=>{
//     Event.findByPk(req.params.id,{
//         include:[Bird]
//     });
//     const newBird = Bird.findAll().then(birds =>{
//         const birdHbsData = birds.map(birds=>birds.get({plain:true}))
//         res.render("journal", {birds:birdHbsData})    
//     })
// })

router.get("/birds/:id", (req,res)=>{
    console.log("Are we putting a bird on it?")
    Bird.findByPk(req.params.id);
    const newImage = Bird.findByPk().then(birdPic =>{
        const birdPicHbsData = birdPic.map(birdPic=>birdPic.get({plain:true}))   
        res.render("journal", {birdPic:birdPicHbsData})    
    })
})


    

 
//  router.get("/bird-details/:id"), (req,res)=>{
//      Bird.findByPk(req.params.id,{
//          include: [sighting]
//      }).then(bird =>{
//          const birdHbsData = bird.map(bird=>bird.get({plain:true}));
//          console.log(bird);
//          console.log(birdHbsData);
//          res.render("journal", birdHbsData);
//      })
//  }
 
 router.get("/sighting/:id",(req,res)=>{
     Bird.findByPk(req.params.id,{
         include: [Sighting]
     });
     const newSighting = Sighting.findAll().then(sightings =>{
        const sightingHbsData = sightings.map(sightings=>sightings.get({plain:true}))
        res.render("journal",{sightings:sightingHbsData})
     })
 })
 
 router.get("/sessions", (req, res) => {
     res.json(req.session);
   });
 
 module.exports = router;