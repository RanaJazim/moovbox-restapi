const config = require("config");
const api = require("./base_api");

const baseURL = config.get("api.baseURL");
const api_key = config.get("api.movie.apiKey");

const fetchingMovies = async function(url) {
    const movieUrl = `${baseURL}${url}?api_key=${api_key}`;
    const { results } = await api(movieUrl, "Error while fetching movies");
    return results;
}

const fetchSingleMovie = async function(movie_id) {
    const url = `${baseURL}/movie/${movie_id}?api_key=${api_key}`;
    return api(url, "Error while fetching single movie");
}

const movieWithGenre = async function(genre) {
    const url = `${baseURL}/discover/movie?api_key=${api_key}&with_genres=${genre}`;
    const { results } = await api(url, "Some error while fetching movie with genres");
    return results;
}

module.exports = {
    fetchingMovies,
    movieWithGenre,
    fetchSingleMovie,
};