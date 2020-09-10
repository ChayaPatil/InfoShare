const express = require('express')
const app = express()
const cors = require('cors')
const configureDB = require('./config/database')
const routes = require('./config/routes')
const port = 3055

configureDB()
app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    console.log('listening on port', port)
})