const { Schema, model } = require('mongoose')

const user = new Schema({
    name: { type: String, required: true },
    secondname: { type: String, required: true },
    email: { type: String, required: false },
    address: { type: String, required: false },
    numberPhone: { type: String, required: true },
    password: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product'}]

})