const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get(`/`,async (req, res) =>{
    const currentUbicationData = process.env.CURRENT_LOCATION
    let apiKey = process.env.API_KEY
    let currentLocation = await axios.get(`${currentUbicationData}`)
    try{
        let currentCoordinate = {
            lat:currentLocation.data.lat,
            lon:currentLocation.data.lon
        }
        let currentUbicationData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCoordinate.lat}&lon=${currentCoordinate.lon}&appid=${apiKey}`)
        res.status(200).send(currentUbicationData.data)
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router