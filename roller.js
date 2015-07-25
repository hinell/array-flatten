var roller = function (arr) {return arr.map && [].concat.apply([],arr.map(roller)) || arr;}; 
