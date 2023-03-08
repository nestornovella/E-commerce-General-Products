const {Router} = require('express')
const { createUser, getUsers } = require('../controllers/userCont')

const router = Router()

router.post("/register", createUser)
router.post("/user", getUsers)


module.exports= router