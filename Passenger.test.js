const Plane = require('./Plane')
const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Bag = require('./Bag')
const Person = require('./Person')

describe ('passenger object',()=>{
    const bbarker = new Passenger('Bob Barker','123')
    
    test('passenger has name',() => {
        expect(bbarker.name).toBe('Bob Barker')
    })

   

   test('passenger bag property exists', () =>{
       expect(bbarker.bags.length).toBe(0)
   })

   test('packBag function adds a bag to bags array', () =>{
        bbarker.packBag(25, 'barker');
        bbarker.packBag(10, 'barker');
        bbarker.packBag(20, 'barker');
       
       expect(bbarker.bags.length).toBe(3)
   })

   test('packBag function adds bag to array properly', () =>{
       
       expect(bbarker.bags[2].weight).toBe(20) && (bbarker.numOfBags).toBe(3) && (bbarker.bags[0].name).toBe('barker0')
   })

   test('passenger should have a ticket number', ()=>{
       expect(bbarker.ticketNum).toBe('123')
   })

   test('passenger is a person',()=>{
        expect(bbarker instanceof Person).toBeTruthy
   })
   test('passenger can call attendant',()=>{
        console.log = jest.fn()
        bbarker.callAttendant()
        expect(console.log).toHaveBeenCalledWith(`Bob Barker has pressed the "Call Attendant" button`)
   })
   test('passenger can take a nap',()=>{
    console.log = jest.fn()
    bbarker.takeNap()
    expect(console.log).toHaveBeenCalledWith(`Bob Barker says: "Zzzzzz Zzzzzz"`)
})


})