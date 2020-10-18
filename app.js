const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('config')

app.use(express.json({ extended: true }))

app.use('/api/catalog', require('./routes/Category.routes'))

const uri = config.get('mongoUri')
const PORT = config.get('port') || 5000
    
async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true//,
            //useFindAndModify: false
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server error..', e.message)
        process.exit(1)
    }
}

start()