const Crew = require('./Crew')
const Person = require('./Person')
const Bag = require('./Bag')

describe('Crew obj', () => {
    const testCrew = new Crew('Nancy')

    test('crew should be people',()=>{
        expect(testCrew instanceof Person).toBeTruthy
    })
    test('crew should have name', ()=>{
        expect(testCrew.name).toBe('Nancy')
    })

    test('crew should have bag property', ()=>{
        expect(testCrew.bags).toStrictEqual([])
    })

    test('crew should be able to pack a bag',()=>{
        testCrew.packBag(15,'bag');
        expect(testCrew.bags[0].weight).toBe(15) && (testCrew.bags.length).toBe(1) && (testCrew.bags[0].name).toBe('bag1')
        })

})