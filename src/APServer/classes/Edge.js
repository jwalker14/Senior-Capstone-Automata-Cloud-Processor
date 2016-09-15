// PRIVATE
var weight = 1
var toState = null
var functionName = null


//CLASS DEF
function Edge(v,f){
	toState = v
	this.functionName = f
};

Edge.prototype.getDest = function(){
	 return toState
};

Edge.prototype.setDest = function(v){
	return toState
};

Edge.prototype.getWeight = function(){
	 return weight
};

Edge.prototype.setWeight = function(w){
	 weight = w
};



module.exports = Edge