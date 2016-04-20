"use strict";

var dotenv = require('dotenv').load();

module.exports = {
    "imgur": {
        "clientID": process.env.CLIENT_ID,
        "clientSecret": process.env.CLIENT_SECRET
    }
}