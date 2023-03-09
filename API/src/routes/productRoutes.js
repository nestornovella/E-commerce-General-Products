const {Router} = require('express')
const { createProduct, getProducts } = require('../controllers/product')


const router = Router()

router.get("/", getProducts)
router.post("/", createProduct)

module.exports= router