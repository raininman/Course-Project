const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const {check} = require('express-validator')
const authMiddleware = require("./midlewaree/authMiddleware")
const roleMiddleware = require("./midlewaree/roleMiddleware")

router.post('/registration',[
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', "Пароль не может быть короче 4 и длинее 10 символов").isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)


module.exports = router