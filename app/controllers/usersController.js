const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res) => {
  const body = req.body
  const user = new User(body)
  user.save()
  .then((user)  => {
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}

usersController.login = (req, res) => {
  const body = req.body
  // check if email ispresent
  User.findOne({email: body.email})
    .then((user) => {
      if(user){
        // res.json(user)
        bcryptjs.compare(body.password, user.password)
          .then((result) => {
            if(result){
              const tokenData = {
                id: user._id
              }
              const token = jwt.sign(tokenData, 'dnhproject', {expiresIn: '2d'})
              res.json({token: `Bearer ${token}`})
            } else {
              res.send({errors: 'Invalid email or password'})
            }
          })
      } else {
        res.json({errors: 'Invalid email or password'})
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

usersController.account = (req, res) => {
  User.findById(req.userId)
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}

usersController.logout = (req,res) => {
  const {user,token} = req
  User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
      .then(()=>{
          res.json({notice: 'successfully logged out'})
      })
      .catch(err=>{
          res.json(err)
      })
}

module.exports = usersController