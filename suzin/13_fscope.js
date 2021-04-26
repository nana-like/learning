// 1. 전역변수와 지역변수
유효범위(Scope)는 변수의 수명을 의미한다. 아래의 예제를 보자. 결과는 global이다.
var vscope = 'global';
function fscope(){
    alert(vscope);
}
fscope();
//결과 : global 텍스트 alert창 띄움 : 변수 선언이 함수 밖에 있어도 접근가능(global 전역변수)
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert(vscope);
}
fscope();
//결과 : local 텍스트 alert창 띄움 : 변수 선언이 함수 안에도 있으면 전역변수보다 지역변수에 접근(local 지역변수)
함수 밖에서 변수를 선언하면 그 변수는 전역변수가 된다. 전역변수는 에플리케이션 전역에서 접근이 가능한 변수다. 다시 말해서 어떤 함수 안에서도 그 변수에 접근 할 수 있다. 그렇기 때문에 함수 fscope 내에서 vscope를 호출 했을 때 함수 밖에서 선언된 vscope의 값 global이 반환된 것이다. 아래 예제를 보자. 결과는 '함수안 local'과 '함수밖 global'이 출력된다.


var vscope = 'global';
function fscope(){
    var vscope = 'local';   // var O : 전역변수 따로, 지역변수 따로. alert의 vscope는 전역변수를 호출
}
fscope();
alert(vscope);
// 결과 => global

var vscope = 'global';
function fscope(){
    vscope = 'local';   // var X : var가 없으면 이것은 전역변수의 vscope를 변경하는 것. fscope 함수를 통해 전역변수 vscope가 지역변수로 변경
}
fscope();
alert(vscope);
// 결과 => local


// 필기자료

var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}
fscope();
alert('함수밖 '+vscope);
즉 함수 안에서 변수 vscope을 조회(4행) 했을 때 함수 내에서 선언한 지역변수 vscope(3행)의 값인 local이 사용되었다. 하지만 함수 밖에서 vscope를 호출(7행) 했을 때는 전역변수 vscope(1행)의 값인 global이 사용된 것이다. 즉 지역변수의 유효범위는 함수 안이고, 전역변수의 유효범위는 에플리케이션 전역인데, 같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선한다는 것을 알 수 있다. 아래 예제를 보자. 결과는 모두 local이다.
var vscope = 'global';
function fscope(){
    vscope = 'local';
    alert('함수안'+vscope);
}
fscope();
alert('함수밖'+vscope);
함수밖에서도 vscope의 값이 local인 이유는 무엇일까? 그것은 함수 fscope의 지역변수를 선언할 때 var를 사용하지 않았기 때문이다. var를 사용하지 않은 지역변수는 전역변수가 된다. 따라서 3행은 전역변수의 값을 local로 변경하게 된 것이다. var을 쓰는 것과 쓰지 않는 것의 차이를 이해해야 한다. 전역변수는 사용하지 않는 것이 좋다. 여러가지 이유로 그 값이 변경될 수 있기 때문이다. 함수 안에서 전역변수를 사용하고 있는데, 누군가에 의해서 전역변수의 값이 달라졌다면 어떻게 될까? 함수의 동작도 달라지게 된다. 이것은 버그의 원인이 된다. 또한 함수를 다른 에플리케이션에 이식하는데도 어려움을 초래한다. 함수의 핵심은 로직의 재활용이라는 점을 상기하자. 변수를 선언할 때는 꼭 var을 붙이는 것을 습관화해야 한다. 전역변수를 사용해야 하는 경우라면 그것을 사용하는 이유를 명확히 알고 있을 때 사용하도록 하자.




///////////////////////////////////////////////////////////
// 2. 유효범위의 효용성

function a (){
    var i = 0; //결과 01234
    // i=0; // 결과 무한반복
}
for(var i = 0; i < 5; i++){     // i=전역변수
    a();
    document.write(i);
}




///////////////////////////////////////////////////////////
// 3. 전역변수를 사용하는 법

불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
MYAPP = {}  // 전역변수(객체) 하나를 생성해놓고 아래와 같이 계산
MYAPP.calculator = {
    'left' : null,  // 객체
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

전역변수를 사용하고 싶지 않다면 아래와 같이 익명함수를 호출함으로서 이러한 목적을 달성할 수 있다.
(function(){    // 익명함수
    var MYAPP = {}  // function을 줌으로 인해 함수의 지역변수가 됨
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())



///////////////////////////////////////////////////////////
// 4. 유효범위의 대상

함수function 외 for문이나 if문 등의 내에 변수선언은 지역변수로써의 의미를 갖지 않는다

///////////////////////////////////////////////////////////
// 5. 정적 유효범위

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.

var i = 5; // 전역변수

function a() {
    var i = 10;
    b();
}

function b() {
    document.write(i);
}

a();
// 결과 => 5

사용될 때(함수 내에 b();)가 아니고 정의될 때(b 함수 정의 function b(){})의 전역변수를 사용한다.
정적 유효범위 = 렉시컬