
// let [foo = true] = [];
// console.log(foo);

// let [x, y = 'b'] = ['a'];  // x = a  y =b 
let [x, y = 'b'] = ['a', undefined]; // x = a  y =b 
console.log(x);
console.log(y);

let [x1 = 1] = [undefined];
let [x2 = 1] = [null];
console.log(x1); //1
console.log(x2); //null

// let { foo, bar, baz } = { foo:'aaa', bar:'bbb'};
// console.log(foo); //aaa
// console.log(bar); //bbb
// console.log(baz); //undefined

let {foo: baz} = { foo:'aaa', bar:'bbb'};
console.log(baz); //aaa
// console.log(foo); //ReferenceError: foo is not defined

let obj = {
    p: [
      'Hello',
      { y3: 'World' }
    ]
  };

// let { p: [x3, {y3}]} = obj;
// console.log(x3); //hello
// console.log(y3); //world
// console.log(p); //ReferenceError: p is not defined


let { p, p: [x3, {y3}]} = obj;
console.log(x3); //hello
console.log(y3); //world
console.log(p); //[ 'Hello', { y3: 'World' } ]

let {x4 = 3} = {}
console.log(x4)
let {x5, y5 = 5} = {x5:1}
console.log(x5, y5);

let {x:y6 = 3} = {}

let {x:y7 = 3} = {x:10};
console.log(y7);

// let {x:{y8}} = {y:10};
// console.log(y8);  //error


const [a1, a2, a3, a4, a5] = 'hello';
let {length: len} = 'hello';
console.log(len);

let {toString:s1} = 124;
console.log(s1);
console.log(typeof s1);
console.log(s1 === Number.prototype.toString);















