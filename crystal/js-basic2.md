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
