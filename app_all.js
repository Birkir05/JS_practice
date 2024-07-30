// var a = 'Hello World!';

// function b() {
//     console.log('Called b!');
// }

// b();
// console.log(a);

// ___________________________________________
// invoking Functions - causes Exucution Stack 

// function c() {
//     d();
//     var i;
// }


// function d() {
//     var e;
// }

// c();
// var e;

// ______________________________________
function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// ____________________

// function a() {
    
//     function b() {
//         console.log(myVar);
//     }
    
// 	b();
// }

// var myVar = 1;
// a();


