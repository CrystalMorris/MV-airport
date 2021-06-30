const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Airport = require('./Airport')

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
        const cody = new Passenger("Cody", ord)
        const becky = new Passenger("Becky",ord)
        testPlane.boardPassenger(cody)
        testPlane.boardPassenger(becky)
        expect(testPlane.passengers.length).toBe(2)
    })
    test('plane should land at destination',()=>{
        testPlane.land(ord)
        expect(testPlane.origin.name).toBe('ORD') && (testPlane.destination.name).toBe('LAX') && (testPlane.passengers.length).toBe(0)
    })


})