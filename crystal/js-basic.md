# 생활코딩 Javascript Basic - 노트정리

## 1. Javascript 기본

* 아는 내용이라 패스

---

## 2. 숫자와 문자 Number and String

### | Number Calculation

* 참고 링크 : [Javascript 사전](https://opentutorials.org/course/50/37)

```javascript
Math.pow(3,2); //3^2 (3 power 2)
Math.round(10.6); //round to integer
Math.ceil(10.2); //round up (to ceiling)
Math.flooe(10.2); //round down (to floor)
Math.sqrt(9); //squared
Math.random(); //randomly generated
Math.random() * 100; //numbers less than 100
Math.round(Math.random() * 100); //round to integer
```

To find out the type

```javascript
console.log(type of 1); // number
console.log(type of '1'); // string
```

---

## 3. 변수 Variable

* 패스

---

## 4. 비교 Comparison

* 참고 링크 : [JS Comparision](https://dorey.github.io/JavaScript-Equality-Table/)

```javascript
== //equal operator 걍 사용하지마..
=== //strict equal operator
```

```javascript
1 == '1'; //true
1 === '1'; //false
```

```javascript
null : defined but empty
undefined: not defined at all.

null == undefined //true
null === undefined //false
```

```javascript
if ==
1 : true
rest : false

true == 1 //true
true == 2 //false
true === 1 //false
true == '1' //true
true === '1' //false
```

```javascript
NaN : Not a Number
ex) 0 / 0

0 === -0 //true
NaN === NaN //false (you can't compare 'NaN')
```

---

## 5. 조건문 Conditional Statement

what's considered as 'false' in JS
```javascript
if (undefined)
if (null)
if (NaN)
if ('') //empty string

var a;
if (a) //a is not defined
```

---

## 6. 반복문 Loop / Iterate

### | while

```javascript
var i = 0;
while (i < 10) {
  document.write('hi' + i);
  i++;
}
```

### | for
while에서 쓴 세개의 덩어리를 for로 한번에 묶어줌
```javascript
for (var i = 0; i < 10; i++) {
  document.write('hi' + i);
}
```

```javascript
var i = 0;
i++; //0
i++; //1
//먼저 나타낸 다음에 더함

var i = 0;
++i; //1
++i; //2
//먼저 더한 다음에 나타냄
```


### | 반복문의 제어
```javascript
break; //반복문 탈출
continue; //멈칫..그 순간엔 멈춤. 하지만 계속 진행
```

### | 반복문의 중첩사용과 디버거
```javascript
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    document.write('hello' + i + j + '<br>'); //앞이 문자여서 i j 도 문자 취급. 숫자로 계산되지 않음.
  }
}
```
---

## 7. 함수 Function

```javascript
function get_arguments(parameter1 + parameter2) {
  return parameter1 + parameter2;
  //any line after 'return' won't be shown. function stops at 'return'.
}

alert(get_arguments(argument1 + argument2));
```
### | 다양한 함수 정의 방법
```javascript
//variable 안에 함수 넣기
numbering = function() {}

numbering();
```

```javascript
//익명 함수 바로 호출하기
(function() {

})();
```

---

## 8. 배열 Array 

```javascript
function get_values() {
  return ['a', 'b', 'c'];
}
//function can only return one value
//but can return 'one array' containing 'several' values.
```

```javascript
var myArray = ['a', 'b', 'c'];

myArray.push('d'); //['a', 'b', 'c', 'd']
myArray.concat(['1', '2']); //must put array //['a', 'b', 'c', '1', '2']
myArray.unshift('z'); //['z', 'a', 'b', 'c']
myArray.shift(); //['b', 'c']
myArray.pop(); //['a', 'b']
```

```javascript
myArray.splice(index, removeHowMany, element1, ..., elementN)

myArray.splice(1, 0, 'm'); //['a', 'm', 'b', 'c']
myArray.splice(1, 1, 'x', 'y'); //['a', 'x', 'y', 'c']
```

```javascript
var myArray = ['c', 'a', 'b'];

myArray.sort(); //['a', 'b', 'c']
myArray.reverse(); //['c', 'b', 'a']

//그 외에도 내 맘대로 sorting function 만들면 됨
```

---

## 9. 객체 Object

* index를 0,1,2(array처럼)이 아닌 데이터를 추가할 수 있음
* 그렇게 쓰는 index = 'key'

```javascript
var myObject = {'alpha': 10, 'beta': 6, 'gamma': 80};
```

```javascript
var myObject = {};

myObject['alpha'] = 10;
myObject['beta'] = 6;
myObject['gamma'] = 80;
```

```javascript
var myObject = new Object();
```

```javascript
myObject['alpha'];
myObject['al'+'pha']; 
myObject.alpha;
```

### | 객체와 반복문

```javascript
for (key in object) {}

for (var myKey in myObject) {
  console.log(alphabet, ':', myObject[key]);
  //alpha : 10
  //beta : 6
  //gamma : 80
}
```
### | 객체 지향 프로그래밍 Object Oriented Programming, OOP

```javascript
var myObject = {
  'myList' : {'a' : 1, 'b' : 2},
  'myFunction' : function() {
    for (var name in this.myList) {
      consol.log(name, this.list[name]);
    }
  }
}

myObject['myFunction']();
myObject.myFunction();
//a 1
//b 2
```

---

## 10. 모듈

* script를 개별 파일에 저장해서 따로 호출하는 방법을 모듈이라고 하는 것이었다.
(이미 알고있는 내용이지만 그게 뭔지 몰랐을 뿐)

---

## 11. UI 와 API 그리고 문서보는 법

* 패스

---

## 12. Javascript와 정규표현식 (Regular Expression)

* 참고 링크 모음
  * [MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  * [RegExp Visualizer](https://regexper.com)
  * [RegExp 빌더](https://regexr.com)

### | string과 정규표현식

```javascript
var str = "a";

//regular expression literal
//= 우리는 'a'를 찾고 있는 것이다
var pattern = /a/;

//regular expression object constructor
//위에 /a/랑 똑같음
var pattern = new RegExp('a');
```

RegExp로 하는 일
  * to execute = exec()
  * to test = test()
  * to replace = replace()

#### 1. exec()
```javascript
var pattern = /a/;
pattern.exec('abcde');
// -> 'a'

var pattern = /a./; //.은 문자를 나타냄 (아무거나)
pattern.exec('abcde');
// -> 'ab'

var pattern = /a/;
pattern.exec('bcdef');
// -> null
```

#### 2. match()
```javascript
pattern.match() //exec랑 비슷함
```

#### 3. test()
```javascript
var pattern = /a/;
pattern.test('abcde');
// -> true
pattern.test('bcdef');
// -> false
```

#### 4. replace()
```javascript
var pattern = /a/;
var str = 'abcde';
str.replace(pattern, 'A');
// -> 'Abcde'
```

### | 옵션

#### i (case insensitive)
```javascript
var woi = /a/;
'Abcde'.match(woi);
// -> null

var wi = /a/i;
'Abcde'.match(wi);
// -> ['A'] 
```

#### g (global)
```javascript
var wog = /a/;
'abceda'.match(wog);
// -> ['a'];

var wg = /a/g; //global
'abceda'.match(wg);
// -> ['a', 'a']; 
```

#### can be applied together
```javascript
var ig = /a/ig;
'AabcdAa'.match(ig);
// -> ['A', 'a', 'A', 'a']; //both applied
```

### | 캡처

```javascript
(\w+)\s(\w+)

\w = A~Z / a~z / 0~9
+ = 수량자 Quantifier (하나 이상이라는 뜻)
\s = space
```

```javascript
var pattern = (\w+)\s(\w+);
var str = 'coding everybody';
var result = str.replace(pattern, '$2, $1'); //$1= 첫번째 그룹 //$2 = 두번째 그룹

// -> result = everybody, coding
```

### | 치환
```javascript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
  return '' + url + '';
});

console.log(result);

//urlPattern에서 약속한대로 생긴 애들이 'url'이라는 parameter로 변해서 function 안에 들어가는 것
```
