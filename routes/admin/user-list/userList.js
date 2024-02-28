const express = require('express')
const userList = require('../../../controllers/admin/user-list/userList')


const router = express.Router()

router.get('/list',userList)


module.exports = router