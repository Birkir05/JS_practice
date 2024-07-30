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


// _____________________________________
// Event qeue processed after Execution context stack processed
// Asynchronous Callbacks

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

