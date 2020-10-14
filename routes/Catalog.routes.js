const { Router } = require('express')
const Catalog = require('./models/Category')
const router = Router()

router.get(
    '/catalog',
    async (req, res) => {
        try {
            const catalog = await Catalog.find({})
            res.status(200).json({ data: catalog })
        } catch (e) {
            res.status(500).json({ message: 'Server error' })
            console.log(e.message)
        }
    })