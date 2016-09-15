//requires
var Edge = require('./Edge.js');
var ArrayList = require('./ArrayList.js');

//PRIVATE
var neighborhood = new ArrayList();
var label = null;
var data = {};


//CLASS
function Vertex(l){
	label = l
	// data = data
}

Vertex.prototype.getLabel = function(){
	 return label
};

Vertex.prototype.setLabel = function(l){
		label = l
		return label == l
};

Vertex.prototype.addNeighbor = function(e){
	if(neighborhood.indexOfEdge(e.functionName) > -1){
		return false
	}
	neighborhood.push(e)
	return true
};

Vertex.prototype.containsNeighbor = function(e){
	//something is wrong with this function
	neighborhood.forEach(function(el){
		if(e == el.functionName){
			console.log('true')
			return true
		}
		else{
			console.log('false')
			return false
		}
	})
};

Vertex.prototype.getNeighbor = function(idx){
		return neighborhood[idx]
};

Vertex.prototype.removeNeighbor = function(idx){
	var removed = neighborhood[idx]
	var arr1 = neighborhood.slice(0,idx)
	var arr2 = neighborhood.slice(idx+1, neighborhood.length)
	neighborhood = arr1.concat(arr2);
	return removed
};

Vertex.prototype.getNeighborCount = function(){
	 return neighborhood.length
};

Vertex.prototype.getNeighbors = function(){
	 return neighborhood
};

module.exports = Vertex