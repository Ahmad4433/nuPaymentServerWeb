const express  = require('express')
const createInvoice  = require('../../../controllers/admin/create-invoice/createInvoice')
const uploadFile = require('../../../middlewares/multer/fileUpload')
const invoiceList = require('../../../controllers/admin/create-invoice/invoiceList')
const singleInvoice = require('../../../controllers/admin/single-invoice/singleInvoice')

const router = express.Router()

router.post('/add',uploadFile(),createInvoice)
router.post('/list',invoiceList)
router.get('/detail',singleInvoice)
module.exports = router