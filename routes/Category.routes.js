const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const Category = require('../models/Category')
const router = Router()

router.get(
    '/all',
    async (req, res) => {
        try {
            const allcategory = await Category.find({})
            res.status(200).json({ data: allcategory })

            if (!res) {
                return res.status(400).json({ message: 'Нет данных' })
            }
        } catch (e) {
            res.status(500).json({ message: 'Server error' })
            console.log(e.message)
        }
    })

router.post(
    '/add',
    [
        check('name', 'Некотректный email').isString()
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные!!'
                })
            }

            const { name, popular } = req.body
            console.log(name, popular)

            try {
                const condidate = await Category.findOne({ name })
                if (condidate) {
                    return res.status(400).json({ message: 'Такая категория уже создана!' })
                }
            } catch (e) { }


            try {
                const category = new Category({ name, popular })

                await category.save()

                res.status(201).json({ message: 'Категория создана!' })
            } catch (e) {
                res.status(400).json({ message: 'create Category error' })
                console.log(e)
            }


        } catch (e) {
            res.status(500).json({ message: 'Server error' })
            console.log(e.message)
        }
    })

module.exports = router