const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Airport = require('./Airport')
const Crew = require('./Crew')
const Person = require('./Person')

describe('Plane Object', () =>{
    const testPlane = new Plane('f145')
    const lax = new Airport('LAX')
    const ord = new Airport('ORD')
    test('plane should have a tailNumber', () => {
        
        expect(testPlane.tailNum).toBe("f145")
    })
    test('plane has origin', () => {
        testPlane.setOrigin(lax);
        
        expect(testPlane.origin.name).toBe('LAX')
    })
    test('plane has destination', ()=>{
        testPlane.setDestination(ord);
        expect(testPlane.destination.name).toBe('ORD')
    })
    test('plane has passengers', ()=>{
        expect(testPlane.passengers.length).toBe(0)
    })

    // test('plane should land at destination',()=>{
    //     testPlane.land(ord)
    //     expect(testPlane.origin.name).toBe('ORD') && (testPlane.destination.name).toBe('LAX') && (testPlane.passengers.length).toBe(0)
    // })
    test('plane has crew', ()=>{
        expect(testPlane.crew.length).toBe(0)
    })
    
    test('boarding should increase passengers appropriately',()=>{
        const tim = new Crew("Tim Allen")
        const jim = new Passenger('Jim McMann','789')
        const lucy = new Passenger('Lucifer Morningstar','666')
        testPlane.boardPassenger(jim)
        testPlane.boardPassenger(lucy)
        testPlane.boardPassenger(tim)
        expect(testPlane.passengers.length).toBe(2) && (testPlane.crew.length).toBe(1)
    })
    test('bags should be loaded on the plane with the passengers',()=>{
        const tim = new Crew("Tim Allen")
        const jim = new Passenger('Jim McMann','789')
        const lucy = new Passenger('Lucifer Morningstar','666')
        jim.packBag(25,"J.McMann")
        jim.packBag(30,"J.McMann")
        lucy.packBag(60,"L.Morningstar")
        tim.packBag(15,'T.Allen')
        testPlane.boardPassenger(jim)
        testPlane.boardPassenger(lucy)
        testPlane.boardPassenger(tim)
        expect(testPlane.totalBags.length).toBe(4)
    })

    test('unauthorized persons are not allowed to board the plane',()=>{
        console.log = jest.fn()
        const ricky = new Person("Ricky Schroder")
        ricky.packBag = (35, "R.Schroder")
        testPlane.boardPassenger(ricky)
        expect(console.log).toHaveBeenCalledWith("Sorry Ricky Schroder, you are not authorized to board.")
    })


})