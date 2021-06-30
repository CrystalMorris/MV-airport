const Passenger = require('./Passenger')
class Plane{
    constructor(tailNum){
        this.tailNum = tailNum,
        this.origin ='',
        this.destination = '',
        this.passengers = []
    }
    setOrigin(airport){
        this.origin = airport;
    }
    setDestination(airport){
        this.destination = airport
    }
    boardPassenger(passenger){
        this.passengers.push(passenger)
    }
    land(airport){
        let oldDest = this.destination;
        let oldOrig = this.origin;
        this.destination = oldOrig;
        this.origin = oldDest;
        this.passengers = [];
    }




}
module.exports = Plane