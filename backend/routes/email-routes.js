const express = require('express');
const { upload } = require('../helpers/filehelper');
const { sendEmail } = require('../controller/emailController');


const router = express.Router();

router.post('/mail', upload.array('files'), sendEmail);

module.exports = router