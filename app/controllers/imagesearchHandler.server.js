'use strict';

var url = require('url');
var auth = require(process.cwd() + '/app/config/auth.js');
var https = require('https');
var resHandler = require(process.cwd() + '/app/controllers/responseHandler.server.js');
var HistHandler = require(process.cwd() + '/app/controllers/historyHandler.server');

module.exports = (req, app, db) => {
    
    var terms = url.parse(req.url).pathname.slice(13);
    
    var histHandler = new HistHandler(db, terms);
    
    histHandler.addVisit();
    
    var num = url.parse(req.url).query.slice(7);
    num = +num;
    
    var options = {
      host: 'api.imgur.com',
      path: '/3/gallery/t/' + terms + '.json',
      method: 'GET',
      headers: {
        Authorization: "Client-ID " + auth.imgur.clientID
      }
    };
    
    https.request(options, (res) => {
      var str = '';
    
      res.on('data', (chunk) => {
        str += chunk;
      });
    
      res.on('end', () => {
        str = JSON.parse(str);
        app.send(resHandler(str.data.items, num)); //sends page response
      });
      
      res.on('error', (err) => {
        console.log(err);
        app.send(err);
      });
    
    }).end(); //end https.get
    
}; // end exports