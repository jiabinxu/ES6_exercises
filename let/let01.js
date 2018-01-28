{
    let a = 10;
    var b = 11;
}
// a;
b;


for (var i = 0; i < 10; i++) {
    
}
console.log('i:' + i); //i:10

var a = [];
for (let i = 0; i < 10; i++) {
   a[i] = function (params) {
       console.log(i);
   }
    
}

a[6]() // 6

var b = [];
for (var index = 0; index < 10; index++) {
    b[index] = function (params) {
        console.log(index);
    }
}
b[6](); //10


for (let i = 0; i < 3; i++) {
    let i= 'me';
    console.log(i);    
}
//me
//me
//me

console.log(foo);
var foo = 'abc';

// console.log(bar);
let bar = 'cba';