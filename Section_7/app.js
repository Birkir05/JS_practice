// var people = [
//     {
//         firstname: 'Tinna',
//         lastname: 'Soffia',
//         addresses: [
//             'Budardalur1',
//             'Budardalur3'        
//         ]
//     },
//     {
//         firstname: 'Birkir',
//         lastname: 'Ari',
//         addresses: [
//             'rvk1',
//             'akur3'
//         ],
//         greet: function() {
//             return 'Hello!';
//         }
//     }
// ]

// console.log(people)

var a = 3;
console.log(typeof a); // primitive type number

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person); // true because Person is a prototype o f 'e'

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);

