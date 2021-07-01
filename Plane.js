const Passenger = require('./Passenger')
const Crew = require('./Crew')
class Plane{
    constructor(tailNum){
        this.tailNum = tailNum,
        this.origin ='',
        this.destination = '',
        this.passengers = []
        this.crew = []
        this.totalBags =[]
    }
    setOrigin(airport){
        this.origin = airport;
    }
    setDestination(airport){
        this.destination = airport
    }
    boardPassenger(passenger){
        if(passenger instanceof Passenger){
        this.passengers.push(passenger)
        passenger.bags.forEach(element => this.totalBags.push(element))
    }
        else if(passenger instanceof Crew){
            this.crew.push(passenger)
            passenger.bags.forEach(element => this.totalBags.push(element))
        } else {console.log(`Sorry ${passenger.name}, you are not authorized to board.`)}
    }
    // land(airport){
    //     let oldDest = this.destination;
    //     let oldOrig = this.origin;
    //     this.destination = oldOrig;
    //     this.origin = oldDest;
    //     this.passengers = [];
    // }




}
module.exports = Plane