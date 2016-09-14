//Reference: http://www.dreamincode.net/forums/topic/377473-graph-data-structure-tutorial/

function Graph(V, E){
	this.vertices = V
	this.edges = E
}

Graph.prototype.toString = function(){
	console.log(this.vertices)
	console.log(this.edges)
	return "DONE"
}

Graph.prototype.addVertex = function(V){

}

Graph.prototype.removeVertex = function(){

}

Graph.prototype.hasVertex = function(){

}

Graph.prototype.addEdge = function(){

}

Graph.prototype.removeEdge = function(){

}

Graph.prototype.hasEdge = function(){

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