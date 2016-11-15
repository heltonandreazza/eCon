const db = require('../db');
const User = db.userModel;
const Cart = db.cartModel;
const async = require('async');

const login = (req, res, next) => {
    async.waterfall([
        () => {
            let newUser = new User();
            newUser.profileId = req.body.profileId;
            newUser.fullName = req.body.fullName;
            newUser.profilePic = req.body.profilePic;
            newUser.address = req.body.address;
            newUser.email = req.body.email;

            findUser(newUser.profileId)
                .then(user => {
                    if (user) {
                        res.json({ message: 'account already saved' });
                    } else {
                        user.save(function(err, user) {
                            if (err) return next(err);
                            callback(null, user, res);
                        });
                    }
                })
                .catch(error => res.json({ message: 'could not find the user' }));

        },
        (user) => {
            let cart = new Cart();
            cart.owner = user._id;
            cart.save(function(err) {
                if (err) return next(err);
                res.json({ message: 'account successfully saved' });
            });
        }
    ]);
}

const findUser = (profileId) => {
    return User.findOne({ profileId: profileId }, (err, user) => {
        if (err) return next(err);
    });
}


module.exports = {
    login
}