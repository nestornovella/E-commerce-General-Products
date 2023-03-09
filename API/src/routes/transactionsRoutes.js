const {Router} = require('express')
const { createTransaction, getTransactios } = require('../controllers/transaction')


const router = Router()

router.get("/", getTransactios)
router.post("/", createTransaction)


module.exports= router