const express = require('express');
const router = express.Router();
const {User,Bird,Event} = require('../models')

router.get("/",(req,res)=>{
    res.render("home")
})

router.get("/events",(req,res)=>{
   Event.findAll().then(events=>{
    const eventsHbsData = events.map(event=>event.get({plain:true}))
    res.render("event", {
        events:eventsHbsData
        })
    })
})

router.get("/event/:id",(req,res)=>{
   Event.findByPk(req.params.id,{
    include: [User]
   }).then(event=>{
    const eventHbsData = event.get({plain:true});
    console.log(event);
    console.log(eventHbsData);
    res.render("journal",eventHbsData);
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router;
