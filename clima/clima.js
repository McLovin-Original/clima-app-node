const axios = require('axios');
const getClima = async(lat,lng) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e9441641fbd89519089cc028737c4ed6`);
    return clima.data.main.temp;
};

module.exports = {
    getClima
}