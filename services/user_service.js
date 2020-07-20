const _ = require('underscore');
const bcrypt = require('bcryptjs');

const { User } = require('../models/user');

const register = async function (user) {
    const existing_user = await User.findOne({ email: user.email });
    if (existing_user != null) return { isRegister: false, user };

    user = new User(_.pick(user, 'name', 'email', 'password'));
    user = await user.save();

    return { isRegister: true, user };
}

const login = async function (user) {
    const checking_user = await User.findOne({
        email: user.email,
    });

    if (checking_user == null) return null;
    const match = await bcrypt.compare(user.password, checking_user.password);

    return match ? checking_user : null;
}

const toggleFavourites = async function (user_id, movie_id, is_favourite) {
    console.log(is_favourite);
    if (is_favourite) {
        return await User.updateOne(
            { '_id': user_id },
            { '$addToSet': { 'favourites': movie_id } },
            { safe: true }
        );
    }
    return await User.updateOne(
        { '_id': user_id },
        { $pull: { favourites: movie_id } },
        { safe: true }
    );
}

module.exports = {
    register,
    login,
    toggleFavourites,
};