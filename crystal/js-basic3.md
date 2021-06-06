# 생활코딩 Javascript Basic - 노트정리 (시즌3)

## 18. 객체지향 - Object Oriented Programming 소개

* 상태(state)와 행위(behave)로 이루어진 객체(Object) 로 만드는 것

---

## 19. 객체지향 - 생성자와 new

* JS는 Prototype-based Programming에 속함.

```javascript
var person = {};

person.name = 'crystal';
person.introduce = function() {
    return 'My name is ' + this.name;
}

document.write(person.introduce());

//name, introduce = property
//property안에 담겨져있는 function = method
```

```javascript
var person = {
    'name' : 'crystal',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}
```

### | 생성자 Constructor

* 'new' constructs a new obejct

```javascript
function Person() {}

var p0 = Person() {}

p0 //undefined

var p1 = new Person() {}

p1 //Person {} //an empty obejct

== var p1 = {}
```

```javascript
function Person() {}
var p1 = new Person();
p1.name = 'mina';
p1.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(p1.introduce());

function Person() {}
var p2 = new Person();
p2.name = 'lucy';
p2.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(p2.introduce());

//introduce가 중복되고 있음.
```

```javascript
//개선
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}

var p1 = new Person('mina');
document.write(p1.introduce());

var p2 = new Person('lucy');
document.write(p2.introduce());

//new는 한마디로 Object를 초기화(initialize) 시키는것
```

---

## 20. 객체지향 - 전역객체

```javascript
function func() {}

func();

window.func();
//window = object
//func = property that is a function = method
//사실 우리가 windw.를 매번 생략하고 있는거임
```

```javascript
var o = {
    'func' : function() {
        //
    }
}

o.func(); 
window.o.func(); //사실 이거임
//window = 전역객체
```

---

## 21. 객제치향 - this

* this란? 함수 내에서 함수 호출 맥락(context)
* 함수를 어떻게 호출하냐에 따라 this가 달라짐

```javascript
func();
//this = window

me.func();
//this = me

func() 는 사실상 window.func() 인거니까 같은 맥락
```

### | 생성자와 this

```javascript
var funcThis = null;

function Func() {
    funcThis = this; //global var //resets global
}

var o1 = Func();
if (funcThis === window) {
    document.write('window </br>');
}

var o2 = new Func(); //새로 생성되는 object //o2.Func()가 되는거
if (funcThis === o2) {
    document.write('o2 </br>');
}
```
### | 객체로서 this 

```javascript
function sum1(x, y) {
    return x + y;
}
sum1(1, 2); //3

var sum2 = new Function('x', 'y', 'return x + y;');
sum2(1, 2); //3

근데 후자는 길어지면 복잡함 그래서 전자로 함
전자 : 함수 리터럴 function literal

var o = {}
: 객체 리터럴 object literal

var a = [1,2,3];
: 배열 리터럴 array literal
```

### | apply와 this

```javascript
var o = {}
var p = {}

function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}

func(); //this = window
func.apply(o); //this = o
func.apply(p); //this = p
```
