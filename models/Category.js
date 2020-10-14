const { Schema, model } = require('mongoose')

const category = new Schema({
    name: { type: String, required: true },
    popular: { type: Boolean, default: false }
})

module.exports = model('Category', category)