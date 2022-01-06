const express = require('express');
const router = express.Router();

router.get(`/`,async (req, res) =>{
    //const usersList = await User.find().select('-password');
    //!usersList? res.status(500).send('User not found'):res.status(200).send(usersList)
})

module.exports = router