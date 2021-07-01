const Plane = require('./Plane')

class Airport {

	static airports =[]
	
	constructor(name) {
		this.name = name,
		this.planes = []
		this.constructor.airports.push(this)
		
	}
	addPlane(plane){
		
		this.planes.push(plane)
	}

}

module.exports = Airport