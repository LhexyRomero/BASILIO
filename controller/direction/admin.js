var express = require('express');
var router = express.Router();
var authentication = require('../../middleware/authentication.js');
var render_view = require('../../middleware/render-view.js');


router.route('/')
    .get(render_view.admin)
    .post(authentication.login, render_view.admin);

module.exports = router;

