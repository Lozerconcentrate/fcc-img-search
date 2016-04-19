'use strict';

module.exports = (arr, num) => {
    
    var filteredArr = []
    
    if (arr === undefined) {
        return 'No results found';
    };
    
    
    if (arr.length < num) {
        filteredArr.push('Results were less than pagination param. Max results: ' + arr.length + '.');
        num = arr.length;
    };
    
    for (var i = 0; i < num; i++) {
        
        var tempObj = 
            {
                'title': arr[i].title,
                'description': arr[i].description,
                'link': arr[i].link
            };
    
        filteredArr.push(tempObj);
        
    } //end for loop
    
    return filteredArr;
    
}; //end exports