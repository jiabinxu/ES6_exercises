
console.log("\uD842\uDFB7");  

console.log("\u{42}");

console.log('\z');
console.log('\172');
console.log('\x7A');
console.log('\u007A');
console.log('\u{7A}');


var s = 'zbc'
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));

for (let codePoint of 'foo') {
    console.log(codePoint);
}

let str = 'Hello world';
console.log(str.startsWith('Hello',0));
console.log(str.endsWith('d'));
console.log(str.includes('llo'));

console.log(str.startsWith('world',6));
console.log(str.endsWith('Hello',5));
console.log(str.includes('llo'));


console.log('x'.repeat(10));
// console.log('x'.padStart(4,'0'));  ES7


let a  = 5 , b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
}

tag `hello ${b-a} world ${a*b} !`;
















