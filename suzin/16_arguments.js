// arguments 유사 배열
function sum(){ // 인자값이 없음
    var i, _sum = 0; // i 루프를 위한 변수 / _sum 출력할 결과를 담아낼 변수   
    for(i = 0; i < arguments.length; i++){      // arguments안에는 사용자가 정한 인자 1,2,3,4가 유사배열로 담겨있다 arguments.length = 4
        document.write(i+' : '+arguments[i]+'<br />');  // 우선 첫번째  i = 0, arguments[i] = 1을 담는다 => 0 : 1
        // i = 1, arguments[i] = 2 => 1 : 2
        // i = 2, arguments[i] = 3 => 2 : 3
        // i = 3, arguments[i] = 4 => 3 : 4
        _sum += arguments[i];
        // 모든 arguments[i]를 더한 값 10
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

// 결과 =>
// 0 : 1
// 1 : 2
// 2 : 3
// 3 : 4
// result : 10


// 매개변수의 수
function zero(){
    console.log(
        'zero.length', zero.length, // 0
        'arguments', arguments.length   // 0
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,   // 함수에 매개변수 몇개의 매개변수를 받는지 1
        'arguments', arguments.length   // 몇개의 매개변수를 전달했는지 2
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,   // 2
        'arguments', arguments.length   // 1
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1