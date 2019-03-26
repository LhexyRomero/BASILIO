var express = require('express');
var router = express.Router();

router.use('/admin',require('./direction/admin'));/* 
router.use('/basilio',require('./direction/user')); */

module.exports = router;
