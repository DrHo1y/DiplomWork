const { Schema, model } = require('mongoose')

const product = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    popular: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = model('Product', product)