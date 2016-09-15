var HashMap = require('hashmap');
//Reference: http://www.dreamincode.net/forums/topic/377473-graph-data-structure-tutorial/
var vertices = new HashMap()
var edges = new HashMap()

//TAKES ArrayList V,E
function Graph(V,E){
	V.forEach(function(e){
		vertices.set(e.getLabel(), e)
	})
	E.forEach(function(e){
		edges.set(e.getLabel(), e)
	})
}

Graph.prototype.toString = function(){

}

Graph.prototype.addVertex = function(V){
	if(vertices.has(V.getLabel())){
		return false
	}
	vertices.set(V.getLabel(), V)
	return true
}

Graph.prototype.removeVertex = function(l){
	if(vertices.remove(l) == null)
		return false
	return true
}

Graph.prototype.hasVertex = function(V){
	return vertices.has(V.getLabel())
}

Graph.prototype.addEdge = function(E){
	if(edges.has(E.functionName))
		return false
	edges.set(E.funtionName, E)
	return true
}

Graph.prototype.removeEdge = function(fn){
	if(edges.remove(fn) == null)
		return false
	return true
}

Graph.prototype.hasEdge = function(){
	return edges.has(E.functionName)
}

Graph.prototype.makeGraph = function(){

}

Graph.prototype.makeVertex = function(){

}

Graph.prototype.makeEdge = function(){

}

Graph.prototype.getEdges = function(){

}

Graph.prototype.getNeighbors = function(){

}

module.exports = Graph