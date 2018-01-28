var date = new Date();

function func1() {
    console.log(date); //undefined
    if (false) {
        var date = 'hellow';
    }
}

func1();

function func2() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);  //5
}
func2();


(function (params) {
    console.log('IIFE')
}())

{
    console.log('++');
}


function func() { console.log('OUTSIDE'); }

(function () {
    if (false) {
        function func() { console.log('INSIDE'); }
    }
    // func() //TypeError: func is not a function
}());

