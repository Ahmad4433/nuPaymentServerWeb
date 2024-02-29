const express = require('express')
const allUsers = require('../../controllers/get-user-list-server/allUsers')
const filePath = require('../../middlewares/setimage-path/imagePath')
const singleUserByName= require('../../controllers/admin/user-list/singleUserByname')
const router = express.Router()


router.get('/users/list',filePath,allUsers)
router.post('/single/byname',singleUserByName)


module.exports = router