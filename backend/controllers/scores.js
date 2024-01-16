const scoresRouter = require('express').Router()
const config = require('../utils/config')
const Score = require('../models/score')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization)
    if (authorization && authorization.startsWith('bearer ')) {
        return authorization.replace('bearer ', '')
    }
    return null
}

scoresRouter.get('/', async (request, response) => {
    const scores = await Score
        .find({}).populate('user', { username: 1, name: 1 })
    response.json(scores)
})

scoresRouter.post('/', async (request, response, next) => {
    const body = request.body

    const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const score = new Score({
        score: body.score,
        user: user._id
    })

    const savedScore = await score.save()
    user.scores = user.scores.concat(savedScore._id)
    await user.save()

    response.status(201).json(savedScore)

})

module.exports = scoresRouter