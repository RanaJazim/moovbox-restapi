const movie_api = require("../external-api/movie");

const fetchAll = async function (req, res) {
    const popular_movies = await movie_api.fetchingMovies("/movie/popular");
    const top_rated_movies = await movie_api.fetchingMovies("/movie/top_rated");

    const movies = [
        { title: "Popular", movies: popular_movies },
        { title: "Top Rated", movies: top_rated_movies },
    ];

    res.send(movies);
}

const movieWithGenre = async function (req, res) {
    const genre = req.params.genre;
    const movies = await movie_api.movieWithGenre(genre);

    res.send(movies);
}

const fetchSingleMovie = async function (req, res) {
    const movie_id = req.params.movie;
    const movie = await movie_api.fetchSingleMovie(movie_id);

    res.send(movie);
}

module.exports = {
    fetchAll,
    movieWithGenre,
    fetchSingleMovie,
};