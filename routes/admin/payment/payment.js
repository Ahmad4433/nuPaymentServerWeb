const express = require('express')
const addPayment = require('../../../controllers/admin/payments/addPayment')
const paymentList  = require('../../../controllers/admin/payments/paymentList')
const singlePayment = require('../../../controllers/admin/payments/singlePayment')
const paymentByIdSingle = require('../../../controllers/admin/payments/paymentByIdSingle')



const router = express.Router()

router.post('/add',addPayment)
router.post('/list',paymentList)
router.post('/single',singlePayment)
router.post('/single/id',paymentByIdSingle)
module.exports = router