var db = require('./db');

// exports.getAllBorrowers = function (cb) {
//     db.query('select * from tbl_borrower;', function (err, result) {
//         cb(err, result);
//     });
//};

exports.getAllBorrowers = function () {
    return new Promise(function (resolve, reject){
        db.query('select * from tbl_borrower;',function (err,result){
            return err?reject(err):resolve(result);
        })
    })
}




