//값으로서의 함수와 콜백
값은 어떤 변수에 담을 수 있다.
var a = "value"

function a() {}
// 함수
var a = function() {}   // 값으로서의 함수
// 메소드
a = {
    b:function() {

    }
}   //b값으로서의 함수를 객체 a에 넣음 b => key, 변수 / function(){} => value
// 함수는 객체안에 저장될 수 있다
// 객체a안에서 b변수의 역할을 하는 것 = 속성 => property
// 속성에 저장되어 있는 함수 => method(객체 안에 저장되어 있는 함수)

function cal(func, num) {
    return func(num)
}

function increase(num) {
    return num+1
}

function decrease(num) {
    return num-1
}

alert(cal(increase, 1));
alert(cal(decrease, 1));

// alert를 호출하기 위해 cal함수와 increase함수 결합
function cal(func, num) {
    var func = increase(num) {
        return num + 1
    }
}
func(1) //func(num)


// 함수의 용도
// 함수는 함수의 리턴 값으로도 사용할 수 있다.
function cal(mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

// 함수는 배열의 값으로도 사용할 수 있다.
var process = [
    function(input) {return input + 10;},   // i의 값이 0일때 : 1+ 10 = 11
    function(input) {return input * input;},   // i의 값이 1일때 : 11 * 11 = 121
    function(input) {return input / 2;}   // i의 값이 2일때 : 121 / 2 = 60.5
];
var input = 1;
for(var i = 0; i < process.length; i++) {   // i = 0,1,2
    input = process[i] (input);
}
alert(input);   // 60.5

변수, 매개변수, 리턴값으로 사용될 수 있는 data를 프로그래밍에서는
first-class-citizen, first-class-object라고 불린다.


// 콜백 : 값으로서의 함수
어떠한 함수가 수신하는 인자

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.sort();
배열 객체(numbers).함수(sort());    // 객체에 저장되어 있는 함수이므로 메소드라고 불림
// sort는 함수라고 하지 않고 배열에 속해있으므로 메소드로 불림
console.log(numbers.sort());
// 결과 => [1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10]
// 원소들 간에 무엇이 우선인지를 판단한다.

var sortfunc = function(a, b) {
    // console.log(a, b);
    // if(a > b) {
    //     return 1;
    // } else if(a < b) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    // 결과 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]

    return a - b;
    return b - a; (정렬의 순서 : 역순);
}
console.log(numbers.sort(sortfunc));
// sortfunc = 콜백함수