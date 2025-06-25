function Phone(brand,mode){
    this.brand = brand;
    this.model = model
    this.details =()=>{console.log(this.brand+this.model)};
}

function Rectangle(height,width){
    this.height = height
    this.width = width
this.area = ()=>{console.log(height*width))}
}

function BankAccount(owner,balance){
    this.owner = owner
    this.balance = balance
    this.deposit = (amount)=>this.balance+=amount
    this.withdraw = (amount)=>{if(this.balance>amount){this.balance-=amount}else{console.log("not enough money try another amount")}}
    this.checkBalance = ()=>{console.log(this.balance)}
}

function Animal(name){
    this.name = name
    this.speak = ()=>{console.log(this.name + "make a sound")}
}
function Dog(name){
    Animal.call(this,name); 
    this.bark =()=>{console.log(this.name+"barks")}
}
Dog.prototype =Object.create(Animal.prototype)
Dog.prototype.constructor = Dog



function Vehicle(type){
    this.type = type
    this.describe = ()=>{console.log( "this is"+this.name)}
}
function Car(brand,type){
    Vehicle.call(this,name); 
    this.brand = brand;
    this.info =()=>{console.log("this is a"+this.brand+this.type)}
}
Car.prototype =Object.create(Vehicle.prototype)
Car.prototype.constructor = Car






