// function a() {

//     function b() {
//         console.log('Var: ' + myVar);
//     }

//     b();

// }

// var myVar = 1;
// a();


//_______________________
// Let keyword

// let myLet = 2;

// {
//     let myLet = 3;
//     console.log('block 2: ' + myLet);

//     {
//         let myLet = 5;

//         for (let myLet = 4; myLet > 3; myLet--) {
//             console.log('block 4: ' +myLet);
//         }

//         console.log('block 3: ' +myLet);
//     }
// }

// console.log('block 1: ' + myLet)

//___________________
// const keyword 

// const myVar = 1;
// const greet = { name: 'Birkir' };
// const MY_LIST = ['rass', 'Snjor']

// // myVar = 2;
// MY_LIST[0] = 'piss'

// {
//     const greet = { name: 'Tinna', lastname: 'cornette' }
//     greet.name = 'lif';
//     console.log(greet);
// }
// console.log(MY_LIST);

// console.log(greet);

// ___________________________
// arrow function - no 'this' keyword is generated from it. 
// So 'this' keyword isnt in their execution context 

// const greeter = (name) => 'Hello ' + name;

// console.log(greeter('Birkir'));

// function greet(greetFunc, name) {
//     return greetFunc(name);
// }

// console.log(greet((name) => 'Hi ' +name, 'Tinna'));

// function Timer() {
//     this.seconds = 0;

//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds)
//     }, 1000);
// }
//const timer = new Timer()


// const greeter2 = {
//     name: 'Tony',
//     greet: () => { console.log(this); return 'Hae ' + this.name },
//     // Here is better to use the simple function to create a methed
//     // since its 'this' keyword is generated which points to the obj the function was created
//     greet_better: function() {
//         return 'Hae ' + this.name;
//     }
// };

// console.log(greeter2.greet());
// console.log(greeter2.greet_better());


// _______________________________________]
// Destrucuring Assignment

const greetings = ['hae', 'hallo'];

const [a, b] = greetings; 

console.log(a);
console.log(b);

let person = {
    firstname: 'Ivy',
    lastname: 'Vidars'
}

let { firstname, lastname } = person;
console.log(firstname);
console.log(lastname);