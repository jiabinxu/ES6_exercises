function add([x,y]) {
    return x+y;
}

console.log(add([2,3]));


let x = [[1,2], [3,4]].map( ([a,b]) => a +b);
console.log(x);

function move({x = 0, y = 0} = {}) {
    console.log('x:' + x  + ',y:' + y);
}

move(); //x:0,y:0
move({}) //x:0,y:0
move({x:8}) //x:8,y:0
move({x:8,y:5}) //x:8,y:5

function move2({x, y} = { x:0, y:0 }) {
    console.log('x:' + x  + ',y:' + y);
}

move2(); //x:0,y:0
move2({}) //x:undefined,y:undefined
move2({x:8}) //x:8,y:undefined
move2({x:8,y:5}) //x:8,y:5