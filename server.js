'use strict';

require('dotenv').load();
var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect('mongodb://localhost:27017/search', (err, db) => {
    
    if (err) {
        throw new Error('MongoDB failed to connect! Err: ' + err);
    } else {
        console.log('Connected to MongoDB...');
    }
    
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(8080, () => {
      console.log('Node.js listening on port 8080...');
   });

    
}); //end mongo.connect