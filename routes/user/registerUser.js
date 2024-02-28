const express = require('express')
const registerUser = require('../../controllers/user/register/register')
const loginUser = require('../../controllers/user/login/login')
const fileUpload = require('../../middlewares/multer/fileUpload')
const updateUser = require('../../controllers/user/update-user-profile/updateProfile')
const setPath = require('../../middlewares/setimage-path/imagePath')



const router = express.Router()
router.post('/register',registerUser)
router.post('/login',loginUser)
router.put('/update',fileUpload(),setPath,updateUser)
module.exports  =router