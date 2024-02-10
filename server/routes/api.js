const express = require('express');
var router = express.Router();

// GET /api/data
router.get('/data', (req, res) => {
    res.status(200)
    res.send("")
});

module.exports = router