const Bag = require('./Bag')

class Person{

    constructor(name){
        this.name = name
        this.bags = []
        this.numOfBags = 0
    }

    packBag(weight, ownersName){
        let num = this.numOfBags.toString();        
        let bagName = ownersName + num;
        let bag = new Bag(weight, bagName);
        this.bags.push(bag);
        this.numOfBags++;
    }

}
module.exports = Person