const Bag = require('./Bag')
class Passenger{
    constructor(name){
        this.name = name,
        this.bags =[]
        this.numOfBags = 0;
    }
    packBag(weight, bagName){
        let num = this.numOfBags.toString();
        let bag = new Bag(weight, bagName);
        bagName = bagName + num;
        bag.name = bagName;
        this.bags.push(bag);
        this.numOfBags++;
    };
    
    

}
module.exports = Passenger