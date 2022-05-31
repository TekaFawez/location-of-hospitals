// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.
const adminModel = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    authenticate: function(req, res, next) {
        adminModel.findOne({ email: req.body.email }, function(err, adminInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, adminInfo.password)) {
                    const token = jwt.sign({ id: adminInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({ status: "success", message: "user found!!!", data: { admin: adminInfo, token: token } });
                } else {
                    res.json({ status: "error", message: "Invalid email/password!!!", data: null });
                }
            }
        });
    },
}