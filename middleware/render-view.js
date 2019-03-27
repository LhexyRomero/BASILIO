exports.admin = function (req, res, next){
    /* res.render('admin/login');
 */


console.log(req.xhr);
console.log("WALA PA");
console.log(res.locals.authenticated,'SESSIOn');
console.log(req.method);
    if (res.locals.authenticated == 1) {
        console.log("DITO AKO AUTHENTICATED");
        res.redirect('admin/dashboard');
    } else {
        res.render('admin/login');
    }
}

