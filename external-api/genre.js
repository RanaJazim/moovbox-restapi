const config = require("config");
const api = require("./base_api");

const baseURL = config.get("api.baseURL");
const api_key = config.get("api.movie.apiKey");

const fetchAllGenres = async function() {
    const url = `${baseURL}/genre/movie/list?api_key=${api_key}`;
    const { genres } = await api(url, "Error while fetching all genres");
    return genres;
}

module.exports = {
    fetchAllGenres,
};