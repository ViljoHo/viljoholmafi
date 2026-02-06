const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()

const commentsRouter = require('./controllers/comments')
const scoresRouter = require('./controllers/scores')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/comments', commentsRouter)
app.use('/api/scores', scoresRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.get('/api/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/api/health', (req, res) => {
  res.send('ok')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app