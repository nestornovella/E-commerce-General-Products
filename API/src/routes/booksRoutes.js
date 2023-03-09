const {Router} = require('express')

const { createBook, getBooks } = require('../controllers/books')



const router = Router()

router.get("/", getBooks)
router.post("/", createBook)


module.exports= router