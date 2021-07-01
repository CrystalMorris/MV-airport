const Person = require('./Person')
const Bag = require('./Bag')

describe('Person object', () =>{
 
    const testPerson = new Person('Bill','passenger')
    test('person should have a name', ()=>{
        expect(testPerson.name).toBe('Bill')
    })

    test('person should have bags property', ()=>{
        expect(testPerson.bags).toStrictEqual([])
    })
    test('person should be able to pack a bag', ()=>{
        testPerson.packBag(25, 'bag')
    })
})