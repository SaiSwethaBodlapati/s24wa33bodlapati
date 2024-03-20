// Import necessary modules and set up router
const express = require('express');
const router = express.Router();

// Define route handler for /computation endpoint
router.get('/', function (req, res, next) {

    const x = Math.round(Math.random()*100);
    res.write('Math.imul() applied to ' + x + ' is ' + Math.imul(x, x));
    res.write('\nMath.log() applied to ' + x + ' is ' + Math.log(x));
    res.write('\nMath.log10() applied to ' + x + ' is ' + Math.log10(x));
    res.end()
});

// Export the router
module.exports = router;
