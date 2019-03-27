const db = require("./db");

let Account = {};

Account.login = function (data, cb) {
    var user = data.user;
    var pass = data.pass;

    var sql = "SELECT id, user_name FROM user_t WHERE user_name = ? AND password = ?";
    db.get().query(sql, [user, pass], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]); 
    });
}

module.exports = Account;