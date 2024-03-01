const express = require("express");
const addTranscation = require("../../../controllers/admin/transcation/addTranscation");
const getTranscationByUser = require('../../../controllers/admin/transcation/getTranscationByUser')
const router = express.Router();

router.post("/add", addTranscation);
router.post('/list',getTranscationByUser)

module.exports = router;
