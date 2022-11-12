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
    if (!req.session.loggedIn) {
      return res.redirect(`/login`);
    }
    User.findByPk(req.params.id)
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

// router.get('/signup',(req,res)=>{
//     if(req.session.loggedIn){
//         return res.redirect(`/user/${req.session.userId}`)
//     }
//     res.render("signup",{
//         loggedIn:false,
//         userId:null
//     })
// })

// router.get("/newAccount", (req, res) => {
//     console.log(req.session.loggedIn);
//     if (req.session.loggedIn) {
//      return res.redirect('/events');
//     } 
//     res.render('newAccount');
// })

router.get("/newAccount", (req, res) => {

    console.log(req.session.logged_in);
    if (req.session.logged_in) {
     return res.redirect('/');
    } 
    res.render('newAccount');
})

router.get("/events",(req,res)=>{
    if (!req.session.loggedIn){
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
