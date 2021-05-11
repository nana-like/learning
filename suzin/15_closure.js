// 클로저
// 내부함수 : 자바스크립트는 함수 안에서 또 다른 함수를 선언할 수 있다.
function outter() {
    var title = 'coding everybody';
    function inner() {
        alert(title);
    }
    inner();
}
outter();


// alert내 title은 외부함수에 접근할 수 있다 : 클로저



// 클로저란?
function outter() {
    var title = 'coding everybody';
    return function() {
        alert(title);
    }
}
inner = outter();   // return되는 함수는 inner에 적용됨
inner();

// 내부함수를 포함하고 있는 외부함수에 접근할 수 있을 뿐 아니라
// 외부함수가 종료된 후에도 접근할 수 있는 것이 클로저




// private variable
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            if(typeof _title === 'String') {
                title = _title
            } else {
                alert('제목은 문자열이어야 합니다.');
            }
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



// 클로저의 응용
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) { // 외부함수
        return function(){  // 외부함수의 return 값
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}

/* 결과
0
1
2
3
4
*/
 