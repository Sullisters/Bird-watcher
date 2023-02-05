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

router.get("/newAccount", (req, res) => {

    console.log(req.session.logged_in);
    if (req.session.logged_in) {
     return res.redirect('/');
    } 
    res.render('newAccount');
})

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
      .then(res.render("event", {hbsUser}));
  });



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

router.get("/sighting/:id", (req,res)=>{
    Bird.findByPk(req.params.id,{
        include:[Sighting]
    }).then(foundBird => {
        const bird = foundBird.get({plain: true})
        console.log
        res.render("sighting", {bird})    
    });
})


 
 router.get("/sessions", (req, res) => {
     res.json(req.session);
   });
 
 module.exports = router;