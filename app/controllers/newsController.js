const News = require('../models/news')

const imageSchema = require('../models/image')
const newsController= {}

newsController.list = (req, res) => {
    News.find()
    .then((news) => {
        res.json(news)
    })
}

newsController.listById = (req, res) => {
  News.find({userId : req.userId})
  .then((news) => {
      res.json(news)
  })
}

newsController.create = (req, res) => {
  const body = req.body
  console.log(req,body)
  console.log(req.file)
  body.image = req.path
  const news = new News(body)
  news.userId = req.userId
  news.save()
  .then((news) =>{
    res.json(news)
  })
  .catch((err) => {
    res.json(err)
  })
}

module.exports = newsController