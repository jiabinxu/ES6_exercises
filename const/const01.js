const PI = 3.14;
console.log(PI);
// PI = 3; //TypeError: Assignment to constant variable.
// const foo; 
// SyntaxError: Missing initializer in const declaration

if (true) {
    // console.log(MAX);
    //ReferenceError: MAX is not defined
    const MAX = 5;
}
// console.log(MAX);
//ReferenceError: MAX is not defined

const obj = {};

obj.a = 'a';
obj.b = 12;
console.log(obj)

// obj = {}
//TypeError: Assignment to constant variable.

const objc2 = Object.freeze({});
objc2.a = 'a';
console.log(objc2) //{}

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i)=>{
        if ( typeof obj[key] == 'object') {
            constantize(obj[key]);
        }
    })
}



