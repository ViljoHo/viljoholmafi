const mongoose = require('mongoose')


const scoreSchema = new mongoose.Schema({
    score: {
        type: String,
        required: true,
        maxLength: 2
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Score', scoreSchema)