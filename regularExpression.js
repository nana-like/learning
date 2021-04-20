// 정규 표현식 regular expression : 문자열에서 특정한 문자를 찾아내는 도구
// 자바스크립트와 같은 언어(자바 등 다른 언어들에서도 사용)

생활코딩 : http://opentutorials.org/course/1 입니다.
네이버 : http://naver.com 입니다.

// 컴파일 : 우리가 어떠한 작업을 하기 위해 우리가 필요한 대상(패턴)을 찾는 것
// 실행 : 어떠한 작업을 구체적으로 하는 것

// 정규표현식 리터럴 
var pattern = /a/; // => a는 우리가 찾고자 하는 대상이다
// 정규표현식 객체 생성자
var pattern = new RegExp('a');  // => 정규표현식 객체 생성
// 위 아래 같은 의미 : pattern이라는 변수에 담았다. (정규표현식 객체)

// (필요한 정보를) 추출, (자신이 확인하고자 하는 정보가 있는지 없는지를) 테스트, (검색된 정보를 다른 정보로) 치환
// 정규표현식 메소드 실행 RegExp.exec()

var pattern = /a/;
pattern.exec('abcde');
정규표현식 객체.실행('검색하고자 하는 대상 입력');
// => ["a"]

var pattern = /a./; // .은 1문자
pattern.exec('abcde');
// => ["ab"]

var pattern = /a/;
pattern.exec('bcdef');
// => null

pattern.test('abcde');
// => true

pattern.test('bcde');
// => false



// 문자열 String과 정규표현식
var pattern = /a/;
var str = 'abcdef';
str.match(pattern);
// => ["a"]

var str = 'bcdef';
str.match(pattern);
// => null

var str = 'abcdef';
str.replace(pattern, 'A');  // 치환
// => "Abcdef"


// 정규표현식 옵션 (i, g)
var xi = /a/;
"Abcde".match(xi);
// => null

var oi = /a/i;  // i는 대문자 소문자를 구분하지 않는다
"Abcde".match(xi);
// => null
"Abcde".match(oi);
// => ["A"]


var xg = /a/;
"abcdea".match(xg);
// => ["a"] a가 한번만 검출

var og = /a/g;
"abcdea".match(og);
// => ["a", "a"] 이 문자열abcdea에 해당하는 모든 a

var ig = /a/ig; // 이 패턴의 모든 문자를 찾겠다
"AaBbCcAa".match(ig);
["A", "a", "A", "a"]



// 캡처
// 정규표현식의 시각화
() : 괄호는 그룹
\w : 문자 word
+ : 앞의 문자(w)가 하나 이상
(\w+) => A, AA
\s : 공백


var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");   // $2는 두번째 그룹(\w+), $1는 첫번째 그룹(\w+) // 이 pattern을 $2, $1로 치환
console.log(result);
everybody, coding