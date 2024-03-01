const express = require("express");
const addTranscation = require("../../../controllers/admin/transcation/addTranscation");

const router = express.Router();

router.post("/add", addTranscation);

module.exports = router;
