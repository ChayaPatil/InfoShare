const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function(value){
        return isEmail(value)
      },
      message: function(){
        return 'Invalid email format'
      }
    }
  },
  password:{
    type: String,
    required: [true, 'Password should be greater then 8 characters and less than 128 characters'],
    minlength: 8,
    maxlength:128
  }
})

userSchema.pre('save', function(next){
  const user = this
  bcryptjs.genSalt()
    .then((salt) => {
      bcryptjs.hash(user.password, salt)
        .then((encryptedPassword) => {
          user.password = encryptedPassword
          next()
        })
    })
})

const User = mongoose.model('User', userSchema)

module.exports = User