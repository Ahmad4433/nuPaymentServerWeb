const express = require('express')
const addProduct = require('../../../controllers/admin/products/addProduct')
const uploadFile = require('../../../middlewares/multer/fileUpload')
const productList= require('../../../controllers/admin/products/productList')
const router  = express.Router()

router.post('/add',uploadFile(),addProduct)
router.get('/list',productList)


module.exports = router