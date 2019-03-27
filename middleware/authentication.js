const account = require("../model/account-model.js");

exports.login = (req,res,next)=> {

    if(req.method == "POST"){
        let user = req.body.username;
        let pass = req.body.password;
        
        account.login({user: user, pass: pass},function(err, result){
            if(err) return next(err);
                if(result){
                    req.session.id = result.id;
                    req.session.username = result.user_name;
                    res.locals.authenticated = 1;
                    user = true;
                    next();
                }else{
                    res.status(200).send({success: false, detail: "Username/Password Incorrect!"});
                }
        });
    }
}   