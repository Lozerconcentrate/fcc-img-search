'use strict';

module.exports = function history (db, terms) {
    
    var searches = db.collection('searches');
    
    this.getVisits = function (req, res) {
        
        searches.find(
            {},
            {'_id': false}
            
        ).sort(
            {'date': -1}
        ).toArray(function(err, documents) {
            if (err) throw err;
        
            res.send(documents);
        
        });
    }; //end getVisits
    
    
    this.addVisit = function(req, res) {
        
        terms = terms.replace('%20', ' ');
        
        var date = new Date(Date.now());
        
        searches.insert({'term': terms, 'date': date}, (err, result) => {
            if (err) { throw (err)};
            
            console.log('terms added are: ' + terms);
        });
 
    
        
    }; // end addVisit
    
}; //end module.exports