# 함수지향 - 값으로서의 함수와 콜백

## 함수

* 함수는 값이다. 따라서 객체 안에 저장될 수 있다. 객체의 속성 값으로 담긴 함수를 메소드(method)라고 부른다.

```JavaScript
var a = {
    myFunc: function(){}
}
```

* 함수는 값이므로 다른 함수의 인자로 저장될 수 있다.

```JavaScript
function calc(func, num) {
    return func(num);
}

function increase(num) {
    return num + 1;
}

calc(increase, 1);
```

* 함수는 리턴 값으로 쓸 수 있다.

```JavaScript
function merchant(action) {
    var transaction = {
        'buy': function(item, money) {
            return `You bought ${item} for ${money} won.`
        },
        'sell': function(item, money) {
            return `You sold ${item} for ${money} won.`
        }
    }
    return transaction[action];
}

console.log( merchant('buy')('sword', 10000) );
console.log( merchant('sell')('potion', 5000) );
// merchant('buy')() 로 호출해서 사용
```

* 함수는 배열의 값으로도 쓸 수 있다.

```JavaScript
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
alert(input); // (1+10) → (11*11) → (121/2) → 60.5
```

## 콜백

* Callback: 다른 코드의 인수로서 넘겨주는 실행 가능한 코드

```JavaScript
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
numbers.sort(sortfunc); //여기서 sortfunc은 콜백함수이다
```

* 콜백은 비동기 처리에서 유용하게 쓸 수 있다! (자바스크립트라면 Ajax)
