const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const Category = require('../models/Category')
const router = Router()

router.get(
    '/category',
    async (req, res) => {
        try {
            const Category = await Category.find({})
            res.status(200).json({ data: Category })
        } catch (e) {
            res.status(500).json({ message: 'Server error' })
            console.log(e.message)
        }
})

router.post(
    '/category/add',
    [
        check('name', 'Введите название категории!')
            .notEmpty()
            .isString(),
        check('popular')
            .toBoolean()
    ],
    async (req, res) => {
        try {
            const error = validationResult(req)

            if (!error.isEmpty()) {
                return res.status(400).json({ 
                    errors: error.array(),
                    message: 'Не корректные данные'
                })
            }

            const { name, popular } = req.body

            const condidate = await Category.findOne({ name })

            if (condidate) {
                return res.status(400).json({ message: 'Такая категория уже создана!' })
            }

            const Category = new Category({ name, popular })

            await Category.save()
            
            res.status(201).json({ message: 'Категория создана!' })

        } catch (e) {
            res.status(500).json({ message: 'Server error'})
            console.log(e.message)
        }
    })

module.exports = router