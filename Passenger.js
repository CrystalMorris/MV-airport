
const Person = require('./Person')
class Passenger extends Person{
    constructor(name,ticketNum){
        super(name)
        this.ticketNum = ticketNum
    }
    callAttendent(){
        console.log(`${this.name} has pressed the "Call Attendant" button`)
    }
    takeNap(){
        console.log(`${this.name} says: "Zzzzzz Zzzzzz"`)
    }
}
module.exports = Passenger