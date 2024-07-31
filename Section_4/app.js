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

var objectLiteral = {
    firstname: 'Oli',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral)); // transforming Object to Json syntax

var jsonValue = JSON.parse('{ "firstname" : "Oli", "isAProgrammer": true }')
// converting Json data back to an Object literal

console.log(jsonValue)