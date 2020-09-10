const express = require('express')
const router = express.Router()

const multer = require('multer')
const multerConf = require('../app/middlewares/image')

const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const newsController = require('../app/controllers/newsController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/news', newsController.list)

router.get('/api/users/account', authenticateUser, usersController.account)
router.delete('/api/users/logout', authenticateUser, usersController.logout)

router.post('/api/users/news', authenticateUser, multer(multerConf).single('photo'), newsController.create)
router.get('/api/users/news/id', authenticateUser, newsController.listById)


module.exports = router