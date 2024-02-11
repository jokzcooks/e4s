const express = require('express');
const MongoService = require('./../mongoService/index');
var router = express.Router();
const MongoInstance = new MongoService()

// GET /api/density
router.get('/density', async (req, res) => {
    console.log("GOT DENSITY")
    try {
        var data = await MongoInstance.getDensity();
        res.status(200)
        res.send(data)    
    } catch (e) {
        res.status(400)
        res.send(e.message)
    }
});

module.exports = router