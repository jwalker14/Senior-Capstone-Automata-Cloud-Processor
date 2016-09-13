function Graph(V, E){
	this.vertices = V
	this.edges = E
}

Graph.prototype.toString = function(){
	console.log(this.vertices)
	console.log(this.edges)
	return "DONE"
}

module.exports = Graph