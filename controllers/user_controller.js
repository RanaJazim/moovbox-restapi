const _ = require('underscore');
const { validator, login_validator } = require('../models/user');
const user_service = require('../services/user_service');

const register = async function (req, res) {
    const error = validateAttr(req.body, true);
    if (error) return res.status(422).send(_.pluck(error.details, 'message'));

    const { isRegister, user } = await user_service.register(req.body);
    if (isRegister == false) return res.status(403).send("User already exists.");

    res.json(user);
}

const login = async function (req, res) {
    const error = validateAttr(req.body);
    if (error) return res.status(422).send(_.pluck(error.details, 'message'));

    const user = await user_service.login(req.body);
    if (user == null) return res.status(403).send("Your email or password is incorrect");

    const token = await user.generateToken();

    // setting the token
    user.token = token;
    res.json(_.pick(user, '_id', 'name', 'email', 'token'));
}

const favourite = async function (req, res) {
    const body = req.body;
    const user = await user_service.toggleFavourites(
        req.user._id,
        body.movie_id,
        body.is_favourite === "true"
    );
    console.log(user);
    res.send(req.body);
}

const validateAttr = function (user, isRegister = false) {
    if (isRegister)
        var { error } = validator.validate(user, { abortEarly: false });
    else
        var { error } = login_validator.validate(user, { abortEarly: false });

    return error;
}

module.exports = {
    login,
    register,
    favourite,
};