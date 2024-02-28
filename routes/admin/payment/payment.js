const express = require('express')
const addPayment = require('../../../controllers/admin/payments/addPayment')
const paymentList  = require('../../../controllers/admin/payments/paymentList')


const router = express.Router()

router.post('/add',addPayment)
router.post('/list',paymentList)

module.exports = router