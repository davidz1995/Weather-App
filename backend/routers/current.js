const express = require('express');
const router = express.Router();
const currentUbicationData = process.env.CURRENT_UBICATION
const axios = require('axios')

router.get(`/`,async (req, res) =>{
    let currentUbication = await axios.get(`${currentUbicationData}`)
    let currentCoordinate = {
        lat:currentUbication.data.lat,
        lon:currentUbication.data.lon
    }
    res.send(currentCoordinate)
    //const usersList = await User.find().select('-password');
    //!usersList? res.status(500).send('User not found'):res.status(200).send(usersList)
})

module.exports = router