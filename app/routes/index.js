'use strict';

var imgHandler = require(process.cwd() + '/app/controllers/imagesearchHandler.server');
var HistHandler = require(process.cwd() + '/app/controllers/historyHandler.server');


module.exports = (app, db) => {

  var histHandler = new HistHandler(db);

  app.get('/$', (req, res) => { res.sendFile(process.cwd() + '/public/index.html'); });
  
  
  app.route('/history')
    .get(histHandler.getVisits); //end app.get "/history"
  
  
  app.route('/imagesearch/*')
    .get( (req, app) => { imgHandler(req, app, db); }); //end app.get "/imagesearch/"
  
} //end exports