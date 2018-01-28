// let [a,b,c] = [1,2,3];

// console.log(a);
// console.log(b);
// console.log(c);


let [foo, [[bar], baz]]  =  [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);


let [, , third] = ['foo', 'bar', 'baz'];
console.log(third);

// let [x , , y] = [1,2,3];
// console.log(x);
// console.log(y);

let [head, ...tail] = [1,2,3,4];
console.log(head);
console.log(tail);

let [x, y, ...z] = [1];
console.log(x);  //1
console.log(y);  //undefined
console.log(z);  //[]

// let [a, [b], c] = [1,[2,3],4];
// console.log(b) //2

let [a, [...b], c] = [1,[2,3],4];
console.log(b) //[ 2, 3 ]







