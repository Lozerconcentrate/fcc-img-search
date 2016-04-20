'use strict';

require('dotenv').load();
var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect(process.env.MONGO_URI + 'search', (err, db) => {
    
    if (err) {
        throw new Error('MongoDB failed to connect! Err: ' + err);
    } else {
        console.log('Connected to MongoDB...');
    }
    
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(process.env.PORT, () => {
      console.log('Node.js listening on port 8080...');
   });

    
}); //end mongo.connect