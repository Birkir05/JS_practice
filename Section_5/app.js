// Understanding the prototype 

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// // EKki gera þetta, bara demo purpose !!

john.__proto__ = person;
// console.log(john.getFullName());

var birkir = {
    firstname: "Birkir"
}

birkir.__proto__ = person

// console.log(birkir.getFullName());

// everything is an object 


// Reflection

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {

        console.log(prop + ': ' + john[prop]);
    }
} 

// use extend feature in the underscore src code to add properties and methods to an object.