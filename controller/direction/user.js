var express = require('express');
var router = express.Router();


router.use('/home',require('../dispatch/user/home'));
router.use('/about',require('../dispatch/user/about'));
router.use('/microbiota',require('../dispatch/user/microbiota'));
router.use('/microbiotaList',require('../dispatch/user/microbiotaList'));

module.exports = router; 