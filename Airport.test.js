const Plane = require('./Plane')
const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Bag = require('./Bag')


describe('Airport object', () => {
  const lax = new Airport("LAX")
  const ord = new Airport("ORD")
  const plane1 = new Plane('f145')
  const plane2 = new Plane('b737')
  plane1.setOrigin(lax)
  plane1.setDestination(ord)
  test('plane1s tailnumber should be f145',()=>{
    expect(plane1.tailNum).toBe('f145') && (plane1.passengers.length).toBe(0)
  })

	test('airport has a name', () => {
		expect(lax.name).toBe("LAX")
    })
    
    test('airport can land planes', ()=>{
      lax.addPlane(plane1)
      lax.addPlane(plane2)
      expect(lax.planes[0].tailNum).toBe('f145')
    })
    test('airport can have planes with passengers with bags',()=>{
      lax.planes = []
     lax.addPlane(plane1)
     lax.addPlane(plane2)
      const dorie = new Passenger('Dorie',ord)
      dorie.packBag(25, 'dorie')
      dorie.packBag(35, 'dorie')
      const jack = new Passenger('Jack',ord)
      jack.packBag(50,'jack')
      jack.packBag(30,'jack')
      plane1.boardPassenger(dorie);
      plane1.boardPassenger(jack)
     expect(lax.planes[0].passengers[0].bags[0].weight).toBe(25)
    

    })


})