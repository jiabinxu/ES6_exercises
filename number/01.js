
console.log(Number.isFinite(NaN));  //false
console.log(Number.isFinite(Infinity));  //false

console.log(Number.isNaN(NaN));  //true

console.log(Number.parseInt('123.45'));  //123
console.log(Number.parseFloat('23.45'));  //23.45

console.log(Number.isInteger(25));  //true
console.log(Number.isInteger(25.1)); //false
console.log(Number.isInteger(25.0)); //true

console.log(Number.isSafeInteger( Math.pow(2,53)));  //false
console.log(Number.isSafeInteger( Math.pow(2,53) - 1));  //ture

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991











