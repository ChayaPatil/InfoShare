const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Title1 is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']    
  },
  link: {
      type: String,
  },
  image: {
    type: String
  }
})

const News = mongoose.model('News', newsSchema)

module.exports = News