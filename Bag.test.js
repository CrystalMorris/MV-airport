const Bag = require('./Bag')

describe('bag object',()=>{
    const testBag = new Bag(25, 'barker1')
    test('bag has weight',()=>{
        expect(testBag.weight).toBe(25)
    })

    test('bag has name', () => {
        expect(testBag.bagName).toBe("barker1")
    })

})