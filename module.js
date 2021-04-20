// 모듈화 = 부품화

// 코드를 여러개의 파일로 분리 
// => 재활용
// => 필요한 로직만을 로드(메모리 절약)
// => 코드 수정시 로직 빠르게 써치
// => 네트워크 트래픽 절약

// 자바스크립트가 구동되는 환경 = 호스트 환경



// # 모듈화
function welcome() {
    return 'Hello world';
}
alert(welcome());

// => <script type="text/javascript" src="greeting.js"></script>
// greeting.js에 function 함수를 넣어 파일 분리
// welcome() 호출만으로 반복적 작업 가능



// # 노드에서의 모듈화(예시만 참고)

// node.demo.js(로드의 주체) : 파일을 읽어오는 쪽
var circle = require('./node.circle.js');
console.log('The area of a circle of radius 4 is ' + circle.area(4));

// node.circle.js(로드될 대상): 읽음을 당하는 쪽
var PI = Math.PI;

exports.area = function(r) {
    return PI * r * r;
};

exports.circumference = function(r) {
    return 2 * PI * r;
};



// # 라이브러리
// 제이쿼리 라이브러리

