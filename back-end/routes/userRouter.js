const userRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

userRouter.post('/register', (req, res) => {
    User.findOne({username: req.body.username})
    .then((user) => {
        if(user == null) {
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                if(body != null) {
                    User.create({
                        username: req.body.username,
                        password: hash,
                        admin: false,
                        secretQuestion: req.body.secretQuestion,
                        secretAnswer: req.body.secretAnswer,
                        address: req.body.address,
                    })
                    .then(user => {
                        res.statusCode = 200;
                        res.json({ valid: true, message: ''});
                    })
                    .catch(err => {
                        res.json({ valide: false, message: err.message});
                    });
                }
            })
            .console.log(err => console.log(err));
        }
    })
    .catch(err => console.log(err));
});


module.exports = userRouter;