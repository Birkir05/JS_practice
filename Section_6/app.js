// Function constructors - only usable if the function doesnt return anything,
//                         since the 'new' operater is returning an object which the function is constructing.
//                         the 'new' operater sets the 'this' keyword to the object which it created

function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;
      
}


// the prototype property is just a prototype object of the Person function Object. 
// This allows all objects created with the function constructor to have access to methods/properties created on the prototype property
// so 'sonur' and 'pabbi' objects point to 'Person.prototype' as their prototype
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var sonur = new Person('Birir', 'Axelsson');

var pabbi = new Person('oli', 'ivasr');
console.log(sonur);
console.log(pabbi);


Person.prototype.getFormalFullName = function() {
    return this.firstname + ', ' + this.lastname;
}

console.log(sonur.getFormalFullName());


// Creating a new method on the prototype property of the String function constructor. 
// all strings have access to this new method

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('Birkir'.isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0; // only works if you create a number that is an object
}


Array.prototype.myCustomFeature = 'cool!';

var arr = ['La', 'sva', 'go'];

for (prop in arr) {
    console.log(prop+': '+arr[prop]);
}
console.log('------------------------')
for (var i=0; arr.length > i; i++) {
    console.log(i+': '+arr[i]);
}