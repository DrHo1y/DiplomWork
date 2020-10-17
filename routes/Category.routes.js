const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const Category = require('../models/Category')
const router = Router()

router.get(
    '/all',
    async (req, res) => {
        try {
            const Category = await Category.find({})
            res.status(200).json({ data: Category })
            
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
        check('name', 'Введите название категории!')
            .notEmpty(),
        check('popular')
            .toBoolean()
    ],
    async (req, res) => {
        try {
            const error = validationResult(req)

            if (error.isEmpty()) {
                return res.status(400).json({ 
                    errors: error.array(),
                    message: 'Не корректные данные'
                })
            }

            const { name, popular } = req.body
            console.log(name, popular)
            
            try {
                const condidate = await Category.findOne({ name })
                if (condidate) {
                    return res.status(400).json({ message: 'Такая категория уже создана!' })
                }
            } catch(e) {}
            

            try {
                const Category = new Category({ name, popular })

                await Category.save()
            
                res.status(201).json({ message: 'Категория создана!' })
            } catch (e) {
                res.status(400).json({ message: 'create Category error'})
                console.log(e)
            }
            

        } catch (e) {
            res.status(500).json({ message: 'Server error'})
            console.log(e.message)
        }
    })

module.exports = router