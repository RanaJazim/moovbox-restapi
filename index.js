const express = require("express");
require("./database/db_connection")();
const movie = require("./routes/movie");
const genre = require("./routes/genre");

const app = express();

if(process.env.api_key)
    console.log("APi key is set");
else
    console.log("Api key is not set");

app.get("/", (req, res) => res.send("Welcome to the Moovbox Application"));
app.use("/movie", movie);
app.use("/genre", genre);

const PORT = 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}...`));