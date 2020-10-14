const { Router } = require('express')
const { check, validationResult } = require('express-validator')
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

router.post(
    '/catalog/add',
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

            const condidate = await Catalog.findOne({ name })

            if (condidate) {
                return res.status(400).json({ message: 'Такая категория уже создана!' })
            }

            const catalog = new Catalog({ name, popular })

            await catalog.save()
            
            res.status(201).json({ message: 'Категория создана!' })

        } catch (e) {
            res.status(500).json({ message: 'Server error'})
            console.log(e.message)
        }
    })