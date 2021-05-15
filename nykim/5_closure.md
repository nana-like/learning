# 함수지향 - 클로저

## 클로저

* 클로저는 내부함수가 외부함수의 컨텍스트에 접근할 수 있도록 한다.

```JavaScript
function outer() {
  var msg = '외부 함수에 있는 지역 변수';
  function inner() {
    alert(msg); // 내부함수에서 외부함수의 지역변수에 접근 가능
  }
  inner();
}
outer();
```

* 외부함수의 실행이 끝나 소멸된 이후에도, 내부함수는 외부함수의 변수에 접근할 수 있다.

```JavaScript
function outer() {
  var msg = '외부 함수에 있는 지역 변수';
  return function() {
      alert(msg);
  }
}
inner = outer(); // outer는 retrun 값을 반환하면서 소멸하지만
inner(); // 내부함수에서는 외부함수에 접근해 변수를 쓸 수 있다
```

## Private Variable

```JavaScript
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());

// factory_movie로 만든 객체의 'title' 변수는 오로지 get_title과 set_title로만 수정할 수 있다.
// 클래스의 접근제어자 private(-)이랑 비슷한 개념?
```

## 클로저의 응용

* 아래 코드를 실행하면 5만 5번 찍힌다. (i가 외부함수의 변수가 아니므로)

```JavaScript
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
```

```JavaScript
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id; //외부함수의 id를 쓰는 내부함수를 return
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
```
