var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('basilio/about');
});


module.exports = router;