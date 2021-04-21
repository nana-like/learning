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
// 모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면
// 라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미
// 제이쿼리 라이브러리 http://jquery.com
// <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
// 다운로드받은 파일 가져오기 : <script type="text/javascript" src="jquery.js"></script>

