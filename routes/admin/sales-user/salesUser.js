const express = require('express')
const addSalesUser = require('../../../controllers/admin/sales-user/addSalesUser')
const uploadFile = require('../../../middlewares/multer/fileUpload')

const router =express.Router()



router.post('/user/add',uploadFile(),addSalesUser)

module.exports = router
