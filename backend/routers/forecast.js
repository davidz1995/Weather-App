const express = require('express');
const router = express.Router();

router.get(`/`,async (req, res) =>{
    let currentCoordinate = {
        lat:currentLocation.data.lat,
        lon:currentLocation.data.lon
    }
    let currentUbicationData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCoordinate.lat}&lon=${currentCoordinate.lon}&appid=${apiKey}`)
})

module.exports = router