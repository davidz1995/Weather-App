const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get(`/`,async (req, res) =>{
    const currentUbicationURL = process.env.CURRENT_LOCATION
    let currentLocation = await axios.get(`${currentUbicationURL}`)
    try{
        res.status(200).send(currentLocation.data)
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router