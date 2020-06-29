const express = require("express");
const movie_controller = require("../controllers/movie_controller");
const movie = require("../external-api/movie");

const router = express.Router();

router.get("/", movie_controller.fetchAll);
router.get("/genre/:genre", movie_controller.movieWithGenre);
router.get("/:movie", movie_controller.fetchSingleMovie);

module.exports = router;