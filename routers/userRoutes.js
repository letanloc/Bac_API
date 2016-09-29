var UserCollection = require('../controllers/UserCollection.js');

function jsonValue(code, msg, data) {
    var jsonData = {
        code: code,
        message: msg,
        data: data
    };
    return jsonData;
}
module.exports = function (app) {
    app.post('/reguister', function (req, res) {

        UserCollection.resister(req.body, function (err, data) {
            if(err)
            res.json(jsonValue(1,err,null),200);
            else
                res.json(jsonValue(0,null,"success"),200);
        })

    });

    app.post('/login', function (req, res) {

        UserCollection.resister(req.body, function (err, data) {
            if(err)
                res.json(jsonValue(1,err,null),200);
            else
                res.json(jsonValue(0,null,"success"),200);
        })

    });


}

