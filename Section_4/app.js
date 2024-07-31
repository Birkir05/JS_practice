//
// Objects and the dot

// var person = new Object();

// person["firstname"] = "Birkir";
// person["lastname"] = "Axel";

// var firstNameProperty = "firstname"

// console.log(person);
// console.log(person[firstNameProperty]);


// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "Vidigrund";
// person.address.city = "Kopavogur";
// person.address.state = "KOP";


// console.log(person.address.city);

// ________________________________
// Object literals

// var Axel = { 
//     firstname: 'Axel', 
//     lastname: 'Asthor',
//     address: {
//         street: 'Vidigrund',
//         city: 'Kopavogur',
//         state: 'KOP'
//     }

// };

// function greet(person) {
//     console.log('Hi ' + person.firstname);
// }

// greet(Axel);

// greet({ firstname: 'Greta',
//      lastname: 'Valdimars'
// });

// Axel.address2 = {
//     street: 'Furugrund'
// }


// _________________________
// Faking Namespaces

// var greet = 'Hello';
// var greet = 'hae';

// console.log(greet);

// var english = { 
//     greetings: { 
//         basic : "Hello"
//     } 
// };

// var isl = {};

// isl.greet = 'hae';

// console.log(english)

// ________________________
// Json and object literals
// Json is more strict - needs qoutes around properties

// var objectLiteral = {
//     firstname: 'Oli',
//     isAProgrammer: true
// }

// console.log(JSON.stringify(objectLiteral)); // transforming Object to Json syntax

// var jsonValue = JSON.parse('{ "firstname" : "Oli", "isAProgrammer": true }')
// // converting Json data back to an Object literal

// console.log(jsonValue)

//_____________________________________________
// First class functions - functions are objects
// that is, the code written inside a function is just 
// one of the properties of that object (function)

// function greet() {
//     console.log('hi');
// }

// greet.language = 'english';


// ______________________
// first class functions - functions as expressions, created on the fly

// greet();

// function greet() {
//     console.log('hi');
// }

// var anonymousGreet = function() {
//     console.log('hi');
// }
// anonymousGreet();

// function log(a) {
//     a();
// }

// log(function() {
//     console.log('hi');
// });

//_______________________________________
// all primitives types are by value | all objects are by reference

//by value (primitives)

// var a=3;
// var b;

// b=a;

// a=2;

// console.log(a);
// console.log(b);


// // by refrence (all objects (including functions))

// var c = { greeting: 'hi' };
// var d;

// d=c;
// c.greeting = 'hello'; // mutated

// console.log(c.greeting);
// console.log(d);

// // by reference (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; // mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operat or sets up new memory space (new address)
// c = { greeting: 'howdy' };

// console.log(c);
// console.log(d);


//____________________________________________
// Functions and 'this'

// function a() {
//     console.log(this);
//     this.newv='hello';
// }

// var b = function() {
//     console.log(this);
// }

// a();

// console.log(newv);

// b();

// var c = {
//     name: 'The c object',
//     log: function() {
//         var self = this;

//         self.name = 'Updated c object';
//         console.log(self); // method on an object

//         var setname = function(newname) {
//             self.name = newname;
//         }
//         setname('Updated again! The c object');
//         console.log(self); 
//     }
// }

// c.log(); // 'this' is referenced to the object
         // which the method as attached to

// ___________________________________________
// arrays

// var arr = [
//     1,
//     false,
//     {
//         name: "birkir",
//         address: "vidigrund"
//     },
//     function(name) {
//         var greeting = 'hello ';
//         console.log(greeting+name);
//     },
//     "hello"
// ];

// console.log(arr);
// arr[3](arr[2].name);


// _________________________________________________
// 'arguments' and spread

// function greet(firstname, lastname, language = 'en') {

//     if (arguments.length === 0) {
//         console.log('missing parameters');
//         console.log("--------------------")

//         return; 
//     }
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log("arg 0: "+arguments[0]);
//     console.log("--------------------");
// }

// greet();
// greet("sveinn", 'la', 'isl');

//  ___________________________________________
// function overload

// function greet(firstname, lastname, language='en') {
//     if (language === 'en') {
//         console.log('hello ', firstname +' '+lastname); 
//     }
//     else if (language === 'isl') {
//         console.log('Hæ ', firstname +' '+lastname); 
//     }
// }

// function greetEnglish(firstname, lastname) {
//     greet(firstname, lastname, 'en')
// }

// function greetIcelandic(firstname, lastname) {
//     greet(firstname, lastname, 'isl')
// }

// greet("sveinn", 'la', 'en');
// greet("sveinn", 'la', 'isl');

// __________________________________________________
// Immediately invoked function expression


// function statement
// function greet(name) {
//     console.log('hello '+ name);
// }

// greet('spa');

// // using a function expression
// var greetFunc = function(name) {
//     console.log('hello ' + name);
// };

// greetFunc('spa');

// //using an IIFe
// var greeting = function(name) {

//     return 'hello '+ name;

// }('birkir');

// console.log(greeting);


// (function(name) {
//     var greeting = "Inside IIFe: HÆ!";
//     console.log(greeting + ' ' + name);
// }('Birkir')); // IIFE

// ______________________________________
// IIFE and safe code

var greeting = 'Hola'; // in Global Execution context

(function(global, name) {
    var greeting = "Hello"; // inside the Execution context
                                       // of the anonymous function
        
    global.greeting = 'Hello';

    console.log(greeting + ' ' + name);
}(window, 'Birkir')); // IIFE


console.log(greeting)