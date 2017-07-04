import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
    
});

/*
    Object Property Shorthand. 
*/
// let bike = 'Scott';
// let stuff = {
//     bike,
//     laptop: 'Mac'
// };
// console.log(stuff);

// let house = {
//     bedrooms: 2,
//     bathrooms: 1.5
// };
// let yearBuild = 1995;
// 
// let fullHouse = {
//     ...house,
//     bedrooms: 3,
//     yearBuild,
//     flooring: 'Carpet'
// }
// 
// console.log(fullHouse);

/*
    Object Spread Operator. Lets you copy all the properties from one
    one object to another.
 */
//  let user = {
//     name: 'Christian',
//     location: 'New York' 
//  };
//  
//  let person = {
//     ...user,
//     age: 27 
//  };
//  
//  console.log(person);

/*
Below is an example on using the bind with the this keyword
let obj = {
    name: 'Christian',
    printName() {
        console.log(`Name: ${this.name}`);
    }
};

setTimeout(obj.printName.bind(obj), 1000);
// obj.printName();
*/

/*
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return `Hi!, I am ${this.name}.`;
    }
    
    getPersonDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Employee extends Person {
    constructor(name, age, title) {
        super(name, age);
        this.title = title;
    }
    
    getGreeting() {
        if(this.title) {
            return `Hi!, I am ${this.name}. I work as a ${this.title}.`;
        } else {
            return super.getGreeting();
        }
    }
    
    hasJob() {
        return !!this.title;
    }
}

class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
        super(name, age);
        this.preferredLanguage = preferredLanguage;
    }
    
    getGreeting() {
        return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
    }
}

let programmer1 = new Programmer('Christian', 27, 'Junior Web');
console.log(programmer1.getGreeting());
*/
/*
let me = new Employee('Christian', 27, 'Junior Web Developer');
console.log(me.getGreeting());

let person1 = new Person('Jonathan', 26);
console.log(person1.getGreeting());
*/

/*
let me = new Person('Christian', 27);
console.log(me.getGreeting());
console.log(me.getPersonDescription());

let person1 = new Person('Jonathan');
console.log(person1.getPersonDescription());
*/

/*-------------------------------------------*/

/* This is known as an anonymous function */
// function square(x) {
//     return x * x;
// }

/* Regular way to create a function with a variable name */
// let square = function(x) {
//     return x * x;
// };

/* Creating a function with ES6 features arrow function*/
// let square = (x) => x * x;
// console.log(square(10));

// let user = {
//     name: 'Christian',
//     sayHi () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// };
// user.sayHi(1, 2);

// let numbers = [9, 99, 4, 56];
// let newNumbers = numbers.map((number) => number + 1);
// console.log(newNumbers);