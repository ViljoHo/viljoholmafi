const commentsRouter = require('express').Router()
const config = require('../utils/config')
const Comment = require('../models/comment')
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


commentsRouter.get('/', async (request, response) => {
    const comments = await Comment
        .find({}).populate('user', { username: 1, name: 1 })
    response.json(comments)
})

commentsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const comment = new Comment({
        content: body.content,
        user: user._id
    })

    const savedComment = await comment.save()
    user.comments = user.comments.concat(savedComment._id)
    await user.save()

    response.status(201).json(savedComment)

})

commentsRouter.delete('/:id', async (request, response, next) => {

    await Comment.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = commentsRouter