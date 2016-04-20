"use strict";

var dotenv = require('dotenv').config({silent: true});

module.exports = {
    "imgur": {
        "clientID": process.env.CLIENT_ID,
        "clientSecret": process.env.CLIENT_SECRET
    }
}