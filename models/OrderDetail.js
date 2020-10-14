const { Schema, model } = require('mongoose')

const order = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    pickup: { type: Boolean, default: true }
})

module.exports = model('OrderDetail', order)