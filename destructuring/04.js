let x1 = 3, y1 =5;

[x1,y1] = [y1,x1];
console.log('x:' + x1 + ',y:' +y1)


function func1() {
    return [1,2,3];
}

let [a, b, c] =  func1();


function func2() {
    return {
        foo:1,bar:2
    }
}

let { foo, bar } = func2();

function func3([x,y,z]) {
    
}

function func4({x,y,z}) {
    
}

const map = new Map();
map.set('first','hello');
map.set('second', 'world');


for (let [key,value] of map) {
    console.log(key + " is " + value);
}

for (let [key] of map) {
    console.log(key );
}

for (let [,value] of map) {
    console.log(value );
}