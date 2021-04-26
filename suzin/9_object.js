// 객체
배열과 객체의 차이점 : 배열은 각각의 변수가 a = [0], b = [1], c = [2] 인덱스를 가지지만
                     : 객체는 각각의 변수에 a = {'first'}, b = {'second'}, c = {'third'}  data를 지정할 수 있다.


// 객체 만들기
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

// 다른 방법으로 객체 만들기 1
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 다른 방법으로 객체 만들기 2
var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;




// 우리가 만든 객체를 가져오는 방법
grades   // 결과 : Object {egoing: 10, k8805: 6, sorialgi: 80}
grades['egoing'];   // 결과 : 10
=== grades['ego' + 'ing']
=== grades.egoing
=/= grades.'ego' + 'ing'   // 결과 : 불가능




// 반복문을 이용해 객체를 다루는 방법
var arr = ['a', 'b', 'c'];
arr   // 결과 : ["a", "b", "c"]
for(var i = 0; i < arr.length, i++) {
    console.log(arr[i]);
}

배열은 순서가 있고(index),
객체는 순서가 없음. 다만, key와 value만 있음.

var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// 포인문
for(key in grades) {
    console.log(key);
    // egoing
    // k8805
    // sorialgi
    console.log(grades[key]);
    // 10
    // 6
    // 80
    document.write("key : " + key + " value : " + grades[key] + "<br/>");
}

// 포인문(다른방법으로 작성)
for(var name in grades) {
    document.write("key : " + name + " value : " + grades[name] + "<br/>");
}

// 배열에서의 포인문 : grades 대신 arr
var arr = ['a', 'b', 'c'];
for(var name in arr) {
    console.log(arr[name]);
}
// 0
// 1
// 2


// 포인문(html 제어하기)
<ul>
    <li>egoing</li>
    <li>k8805</li>
    <li>sorialgi</li>
</ul> // 아래와 같이 제어

<ul>
    <script type="text/javascript">
        for(var name in grades) {
            document.write("<li>key : " + name + " value : " + grades[name] + "</li>");
        }
    </script>
</ul>

// => 결과 :
<ul>
    <script type="text/javascript">
        <li>key : egoing value : 10</li>
        <li>key : k8805 value : 6</li>
        <li>key : sorialgi value : 80</li>
    </script>
</ul>


// 객체지향 프로그래밍
// 1. 객체 안에 값이 저장되어 있는 경우
var grades = {
    'list' : {'egoing' : 10, 'k8805': 6, 'sorialgi': 80};
}   // 객체 안에 객체
alert(grades['list']);
// 결과 : {'egoing' : 10, 'k8805': 6, 'sorialgi': 80}

alert(grades['list']['egoing']);
// 결과 : 10

// 2. 객체 안에 함수가 저장되어 있는 경우
var grades = {
    'show' : function(){
        alert('Hello world');
    }
}
alert(grades['show']();)   // 함수호출
// 결과 : Hello world 얼럿창

var grades = {
    'list' : {'egoing' : 10, 'k8805': 6, 'sorialgi': 80};
    'show' : function(){
        alert(this);   // this = 함수가 속해있는 객체 = grades
        alert(this.list);   // grades.list
        // 결과 : {'egoing' : 10, 'k8805': 6, 'sorialgi': 80}
    }
}

// 포인문
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
        console.log(this.list);
    }
};
grades.['show']();
// egoing 10
// k8805 6
// sorialgi 80

// 다른방법으로 작성
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();
// egoing : 10
// k8805 : 6
// sorialgi : 80