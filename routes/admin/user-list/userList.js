const express = require('express')
const userList = require('../../../controllers/admin/user-list/userList')
const singleUserByName = require('../../../controllers/admin/user-list/singleUserByname')

const router = express.Router()

router.get('/list',userList)
router.post('/single/byname',singleUserByName)

module.exports = router