const express = require("express");
const body_parser = require('body-parser');
require("./database/db_connection")();
require("./checking-env-var")();
const movie = require("./routes/movie");
const genre = require("./routes/genre");
const auth = require("./routes/user");

const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.get("/", (req, res) => res.send("Welcome to the Moovbox Application"));
app.use("/movie", movie);
app.use("/genre", genre);
app.use("/auth", auth);

const PORT = 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}...`));