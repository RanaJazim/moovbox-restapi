const axios = require("axios");

module.exports = async function(url, errMsg) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(errMsg, err);
    }
}