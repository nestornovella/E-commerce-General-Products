const {Router} = require('express')
const { updateCart, cleanCart } = require('../controllers/Cart')





const router = Router()


router.post("/", updateCart)
router.delete("/", cleanCart)

module.exports= router