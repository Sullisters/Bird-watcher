const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  User.findAll().then(userData => {
    res.json(userData)
  }).catch(err => {
    res.status(500).json({ msg: "An error has occurred", err })
  })
})

router.post('/', (req, res) => {
  console.log(req.body);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(newUser => {
    req.session.userId = newUser.id;
    req.session.loggedIn = true;
    res.json(newUser)
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err })
  })
})

// router.post('/login',(req,res)=>{
//   User.findOne({
//       where:{
//           email:req.body.email
//       }
//   }).then(foundUser=>{
//       if(!foundUser){
//           return res.status(401).json({msg:'user not found'})
//       }else if(!bcrypt.compareSync(req.body.password,foundUser.password)){
//           return res.status(401).json({msg:'password incorrect'})
//       }else{
//           req.session.userId=foundUser.id;
//           req.session.loggedIn=true;
//           res.json(foundUser);
//       }
//   }).catch(err=>{
//       console.log(err);
//       res.status(500).json({err});
//   })
// })


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then((updatedUser) => {
    if (updatedUser[0] === 0) {
      return res.status(404).json({ err });
    }
    res.json(updatedUser);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ err: err });
  });
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
