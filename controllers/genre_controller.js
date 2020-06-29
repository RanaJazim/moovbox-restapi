const genre_api = require("../external-api/genre");

const fetchAllGenres = async function (req, res) {
    const genres = await genre_api.fetchAllGenres();

    res.send(genres);
}

module.exports = {
    fetchAllGenres,
};