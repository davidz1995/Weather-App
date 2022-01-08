const express = require('express');
const router = express.Router();
const axios = require('axios');
const currentUbicationURL = process.env.CURRENT_LOCATION;
const apiKey = process.env.API_KEY;

router.get(`/`,async (req, res) =>{
    try{
        let currentLocation = await axios.get(`${currentUbicationURL}`);
        let currentCity = await currentLocation.data.city;
        let currentCityWeatherFiveDaysForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}`);
        let response = {
            locationData:currentLocation.data,
            currentCityWeatherFiveDaysForecast: currentCityWeatherFiveDaysForecast.data
        }
        res.status(200).send(response)
    }catch(error){
            res.status(400).send(error.message)
    }
})

router.get(`/:city`,async (req, res) =>{
    let city = req.params.city;
    try{
        let optionalCityWeatherFiveDaysForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        res.status(200).send(optionalCityWeatherFiveDaysForecast.data)
    }catch(error){
        res.status(404).json({message:'Ciudad no encontrada'})
    }
})

module.exports = router