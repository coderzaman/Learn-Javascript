// JavaScript Classes are templates for JavaScript Objects.
// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Class Syntax
// Use the keyword class to create a class.
// Always add a method named constructor():

// class ClassName {
//     constructor() { ... }
// }

class Car{
    constructor(car, year) { 
        this.car = car;
        this.year = year;
    }
    age(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

let car1 = new Car("Ford", 2014);
let car2 = new Car("Audi", 2019);

console.log(car1.car);
console.log(car1.year);
console.log(car2.car);
console.log(car2.year);


console.log(car1.age());


class Person{
    constructor(name, village, bdate) {
        this.name = name;
        this.village =village;
        this.bdate = bdate;
    }

    calculateAge(){
        let birthdate = new Date(this.bdate);
        let difftime = Date.now() - birthdate.getTime();
        let ageDate = new Date(difftime);
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }
}

let person1 = new Person("Aktauzzaman","Cox's Bazar", "04-13-1998");
console.log(person1.bdate);
console.log(person1.name);
console.log(person1.calculateAge()); 


console.log("Examine: ");
let bdate = "04-13-1998";
let birthdate = new Date(bdate);

let difftime = Date.now() - birthdate.getTime();  
//If assume current year is Sep, 2024. 1970 to 2024 = > 54 years
// If assume birthdate is Aprinl, 1998. 1970 to 1998 => 28 years
// 54-28  = 26 years
let ageDate = new Date(difftime); // this function add 26 years equal ms
//  to 1970 that will be = 1996
console.log(Math.abs(ageDate.getUTCFullYear() -1970)); // 1996-1970 = 26


// JavaScript Class Inheritance
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

class Person1{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return this.fname + ' ' + this.lname;
    }

    greet(){
        console.log(`Hello, ${this.getFullName()}`);
    }
}


let p1 = new Person1("Abdullah", "Abdur Rahman");
p1.greet();

class Customer extends Person1{
    constructor(fname, lname, cusId, address){
        super(fname,lname);
        this.cusId = cusId;
        this.address = address;
    }
    getCustInfo(){
        console.log("\tCustomer Ifo:");
        console.log("Name:", this.getFullName());
        console.log("Customer Id:", this.cusId);
        console.log("Address:", this.address);
    }
}


p2 = new Customer("Akib", "Zabed", 123, "Dhaka");
p2.getCustInfo(); 

// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
// That means that you must declare a class before you can use it:

// const myCar = new Car1("Ford") //cause error
  
class Car1 {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
  //Now you can use the class:
  const myCar = new Car1("Ford") 
  console.log(myCar.carname);

// Static Function 

// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
class P{
    constructor(fname,lname) {
      this.fname = fname;
      this.lname = lname;
    }
    static hello() {
      return "Hello!!";
    }

    getFullName(){
        return this.fname + ' ' + this.lname;
    }
}

let ob1 = new P("Abdullah", "Abdur Rahman");
console.log(P.hello());
console.log(ob1.getFullName());
// ob1.hello();//Error
