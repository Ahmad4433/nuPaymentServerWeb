const express = require('express')
const allUsers = require('../../controllers/get-user-list-server/allUsers')
const filePath = require('../../middlewares/setimage-path/imagePath')
const router = express.Router()


router.get('/users/list',filePath,allUsers)


module.exports = router