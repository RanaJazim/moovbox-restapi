const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect(
        'mongodb://localhost:27017/moovbox',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then((res) => console.log("Successfully connected to the database...."))
        .catch((err) => console.log("Some errors while connecting to the database", err));
}