function Log(x,y) {
    y = y || 'world';
    console.log(x,y); 
}

Log('hello');
Log('hello', 'boy')
Log('hello', '')

function Log2(x, y = 'world') {
    console.log(x,y);
}

Log2('hello');
Log2('hello', 'boy')
Log2('hello', '')

function fetch(url, { body = '', method = 'GET', headers = {}} = {}) {
    console.log(method);
}

fetch('www.baidu.com');

function sortNames() {
    return Array.prototype.slice.call(arguments).sort();
}

const sortNames1 = (...numbers) =>numbers.sort();

function Fibonacci(n) {
    if (n <= 1) {
        return 1;
    }

    return Fibonacci(n -1) + Fibonacci (n-2);
}

// console.log(Fibonacci(100));

function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if ( n <=1) {
        return ac2;
    }
    return Fibonacci2 (n-1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(100));