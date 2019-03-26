var express = require('express');
var router = express.Router();
var authentication = require('../../middleware/authentication.js');

router.get('/',(req,res,next)=>{
    res.render('admin/login');
});

module.exports = router;