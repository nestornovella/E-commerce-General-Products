const {Router} = require('express')
const { register, login } = require('../controllers/userAuth')
const { getUsers } = require('../controllers/users')

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/", getUsers)

module.exports= router