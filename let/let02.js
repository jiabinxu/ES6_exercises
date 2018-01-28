var tmp = 124;

if (true) {
    temp = 234;
    // let temp;
}


// console.log(typeof x);  //ReferenceError: x is not defined
console.log(typeof y);  //undefined
let x = 'str';

function bar(x = 2, y = x) {
    console.log('x:' + x);
    console.log('y ' + y);
}

bar();

function func1(params) {
    let b  = 10;
    // var b = 1; Identifier 'b' has already been declared
}


function func2(c) {
    // let c = '12';   Identifier 'c' has already been declared
    {
        let c = '12'
        console.log(c);  //12
    }
}

func2();