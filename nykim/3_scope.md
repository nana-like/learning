# 함수지향 - 유효범위

## 유효범위의 효용

```JavaScript
function a() {
    i = 0;
}

for (var i=0; i<5; i++) {
    a();
    document.write(i);
}
```

* Q. 위 코드의 실행결과는? <br/
  A. x_x 브라우저 주금
* 이유는 for 문 내 변수 i 의 범위는 '전역'인데, a() 함수 내에서 전역 변수 i의 값을 0으로 만들기 때문. 따라서 조건문이 충족되는 경우가 없기 때문에 무한 반복으로 브라우저는 뻗는다 (끄앙)
* 이렇게 유효범위를 인지하고 잘 사용하는 것이 중요하다 (웬만하면 지역변수 쓰자!)

---

## 전역변수를 사용하는 법

* 불가피하게 전역변수를 사용해야 한다면 하나의 객체로 만들고, 객체의 속성으로 변수를 사용하는 것이 좋다.

```JavaScript
var MYAPP = {}
MYAPP.info = {
    'name': 'Nana',
    'age': 29
};
MYAPP.info.name = 'Nayoung';
```

* 또는 익명함수를 호출해 사용한다. (jQuery처럼!)

```JavaScript
(function(){
    var MYAPP = {} //함수 내 지역변수가 됨
    MYAPP.info = {
        "name": "Nana",
        "age": 29
    };
    MYAPP.info.name = "Nayoung";
    })
```

---

## 유효범위의 대상

* **자바스크립트의 지역변수는 "함수"에서만 유효하다.**
  * _(너무 널럴하신 거 아니요 자스 양반...)_
  * 이런 아이고 두야 🤯 스러운 문제를 해결하기 위해 출범한 것이 `let`과 `const`

```Java
    for (int i=0; i<10; i++) {
        String name = "Nana";
    }
    System.out.printIn(name); //결과: ERROR! (지역변수를 호출하려고 하기 때문에 에러)
```

```JavaScript
    for (var i=0; i<10; i++) {
        var name = "Nana";
    }
    console.log(name); //결과: Nana (함수가 아니므로 name은 전역변수임. 따라서 쿨하게 콘솔에 찍어줌)
```

---

## 정적 유효범위

* **자바스크립트는 함수가 "선언된" 시점의 유효범위를 갖는다.**
  * 이를 정적 유효범위(static scoping) 또는 렉시컬(lexical scoping)이라고 한다.
  
```JavaScript
    var i = 5;
    function a() {
        var i = 100;
        b();
    }
    function b() {
        alert(i);
    }
    a(); //결과: 5
```

```JavaScript
    var a = 10;
    var b = 20;
    var c = 30;

    function func1() {
        var b = 200;
        var c = 300;
        func2();
    }

    function func2() {
        var c = 3000;
        console.log('a', a); //결과: 10
        console.log('b', b); //결과: 20
        console.log('c', c); //결과: 3000
    }

    func1();

    /*
        func2()가 호출될 때, 
        c는 지역변수로 존재하므로 해당 내용(3000)을 참조
        b는 지역변수가 존재하지만 func2() 선언 시점에선 알 수가 없기 때문에 참조하지 못하는 걸까? 🤔
    */
```
