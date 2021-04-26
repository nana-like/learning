# 생활코딩 Javascript Basic - 노트정리

## 10. 모듈

* script를 개별 파일에 저장해서 따로 호출하는 방법을 모듈이라고 하는 것이었다.
(이미 알고있는 내용이지만 그게 뭔지 몰랐을 뿐)

---

## 11. UI 와 API 그리고 문서보는 법

* 아는 내용이라 패스

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

#### RegExp로 하는 일
  * 필요한 정보만 추출 = exec
  * 원하는 정보가 있는 지 확인 = test
  * 특정 정보를 치환 = replace

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

#### 3. text()
```javascript
var pattern = /a/;
pattern.text('abcde');
// -> true
pattern.text('bcdef');
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

---

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
//익명 함수 바로 호출하는 방법
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
