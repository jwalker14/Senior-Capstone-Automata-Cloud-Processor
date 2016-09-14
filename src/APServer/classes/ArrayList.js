//overrite some basic array functions for this application
var ArrayList = Array

ArrayList.prototype.indexOf = function(fn){
	var i = 0;
	var found = false;
	while(i < this.length){
		if(fn == this[i].functionName){
			return i
		}
		i++
	}
	return -1
};

module.exports = ArrayList