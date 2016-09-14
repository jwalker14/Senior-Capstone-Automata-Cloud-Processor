//overrite some basic array functions for this application

//http://www.ecma-international.org/ecma-262/5.1/#sec-15.4

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