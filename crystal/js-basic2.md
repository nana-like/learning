# 생활코딩 Javascript Basic - 노트정리 (시즌2)

## 13. 함수지향 - 유효범위 Scope
* Scope이란? 변수의 수명을 말한다.

### | 전역변수와 지역변수

```javascript
var vscope = 'global';

function fscope() {
  var vscope = 'local';
  alert(vscope);
}

fscope(); //alert local
alert(vscope); //alert 'global'
```

```javascript
var vscope = 'global';

function fscope() {
  vscope = 'local';
}

fscope();
alert(vscope); //'local' (전역을 갈아치움)
```

```javascript
var vscope = 'global';

function fscope() {
  var vscope = 'local';
  vscope = 'local';
}

fscope();
alert(vscope); //'local' (전역을 갈아치움22)
```
* 그러므로 웬만하면 var 붙여서 local로 사용한다.

### | 유효범위의 효용

```javascript
function a() {
  var i = 0;
}

for (var i = 0; i < 5; i++) {
  a();
  document.write(i);
}

// i = 01234
```

```javascript
function a() {
  i = 0;
}

for (var i = 0; i < 5; i++) {
  a();
  document.write(i);
}

// global이 i = 0 으로 계속 리셋됨 , i < 5 가 항상 성립되므로 무한 for loop
```

### | 전역변수의 사용

```javascript
(function() {
  var global같지만local인애
}());
```
### | 유효범위의 대상
* Javascript의 경우 function 안에서만 local variables가 적용됨. for, while 이런 애들은 상관없음

### | 정적 유효범위 Static Scoping / Lexical Scoping

```javascript
var i = 5;

function a() {
  var i = 10;
  b();
}

function b() {
  document.write(i);
}

a();

// i = 5;
// b()가 호출되는 시점이 아니라 b()가 정의되는 시점으로 적용됨
// a() 밖이므로 global 적용
```

---

## 14. 함수지향 - 값으로서의 함수와 콜백

### | 함수의 용도

* in JS, a function is an object, a value.
* so it can be 
  * a variable
  * a parameter
  * a return value

```javascript
a = {
  b: function() {
    //b = key = variable = property
    //this function is a method
  }
}
```

```javascript
function calc(myFunction, myNum) {
  return myFunction(myNum);
}

function increase(num) {
  return num + 1;
}

alert(calc(increase, 1));
```

```javascript
function cal(mode) {
  var funcs = {
    'plus': function(left, right) {
      return left + right;
    },
    'minus': function(left, right) {
      return left - right;
    }
  }
  return funcs[mode]; //function used as a return value
}

alert(calc('plus')(2,1)); //function used as a parameter
//calc('plus')() 라는 function 호출 중인거
```

```javascript
var process = [ //function used as variables in an array
  function(input) {
    return input + 10;
  },
  function(input) {
    return input * input;
  },
  function(input) {
    return input / 2;
  }
];

var input = 1;

for (var i = 0; i < process.length; i++) {
  input = process[i](input);
}

alert(input); //i 세번 돌고 나와서 11 -> 121 -> 60.5
```

### | Callback function


```javascript
var numbers = [3, 1, 20, 7, 10, 2,];
numbers.sort(); 
//numbers = an object
//sort = a function bound to an object = a method

//1, 10, 2, 20, 3, 7
```

```javascript
var myCBfunc = function(a, b) {
  console.log(a, b);
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
  // return a - b; 걍 이렇게 해도 됨ㅋ_ㅋ 알아서 1, -1, 0 되니까
  // return b - a; 하면 역순
}
numbers.sort(myCBfunc);

//1, 2, 3, 7, 10, 20

//여기서 myCBfunc이 callback function
```

### | 비동기 처리 Asynchronous Process

Ajax : Asynchronous Javascript And XML

* 모든걸 순차적으로 진행할 순 없음
* 그렇기에 '저장'해놓고 뒤에서 조용히 처리한 다음에 call 되기 위해 기다리는 것
