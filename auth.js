"use strict";

require('dotenv').config();

module.exports = {
    "imgur": {
        "clientID": process.env.CLIENT_ID,
        "clientSecret": process.env.CLIENT_SECRET
    }
}