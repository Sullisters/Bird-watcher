const express = require('express');
const router = express.Router();
const {User,Bird,Event, Sighting} = require('../models');
//need sighting routes added below
//need friend routes added below
//need to finish friend routes in friendRoutes.js

router.get("/",(req,res)=>{
    res.render("home")
})

//THIS WORKS PLEASE DO NOT CHANGE -PHILIP-
router.get("/login",(req,res)=>{
    if (req.session.logged_in){
        res.redirect('/');
        return;
    }
    res.render("login", {
        logged_in: req.session.logged_in
    })
})

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
   Event.findAll().then(events=>{
    const eventsHbsData = events.map(event=>event.get({plain:true}))
    res.render("event", {
        events:eventsHbsData
        })
    })
})

router.get("/journal/:id",(req,res)=>{
   Event.findByPk(req.params.id,{
    include: [User]
   }).then(event=>{
    const eventHbsData = event.get({plain:true});
    console.log(event);
    console.log(eventHbsData);
    res.render("journal",eventHbsData);
    })
})

router.get("/bird-details/:id"), (req,res)=>{
    Bird.findByPk(req.params.id,{
        include: [sighting]
    }).then(bird =>{
        const birdHbsData = bird.map(bird=>bird.get({plain:true}));
        console.log(bird);
        console.log(birdHbsData);
        res.render("journal", birdHbsData);
    })
}

router.get("/sighting/:id",(req,res)=>{
    Sighting.findByPk(req.params.id,{
        include: [Bird]
    }).then(sighting=>{
        const sightingHbsData = sighting.map(sighting => sighting.get({plain:true}));
        console.log(sighting);
        console.log(sightingHbsData);
        res.render("journal", sightingHbsData)
    })
})

router.get("/sessions", (req, res) => {
    res.json(req.session);
  });

module.exports = router;
