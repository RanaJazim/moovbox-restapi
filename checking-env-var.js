const config = require("config");

module.exports = function() {
    if (!config.get('jwtPrivateKey')) {
        console.error('Fatal Error: jwtPrivateKey is not defined');
        process.exit(1);
    }
    
    if(!config.get("api.movie.apiKey")) {
        console.error("Fatal Error: apiKey is not defined");
        process.exit(1);
    }
}