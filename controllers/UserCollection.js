/**
 * Created by loc on 9/26/16.
 */
var db = require('../connection/connectData.js');
// var passwordHash = require('password-hash');
module.exports.resister = function (req, callback) {

    db.users.insert({
        username: req.username,
        dayofbirth: req.dayofbirth,
        gender: req.gender,
        password: String(req.password),
        phone: req.phone,
    }, function (err, doc) {
        err ? callback(err, null) : callback(null, doc);
    });

}

module.exports.login = function (req, callback) {
    db.users.findOne({username: req.username}, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            if (data.password == req.body.password) {
                callback(null, data);
            } else {

            }

        }
    });

}