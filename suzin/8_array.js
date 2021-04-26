// 배열
var member = ['sorialgi', 'k8805', 'sorialgi'];
// => 변수에 담는다. 1:다

// 배열의 효용
function get_member1() {
    return 'egoing';
}

function get_member2() {
    return 'k8805';
}

function get_member3() {
    return 'sorialgi';
}

document.write(get_member3);
// => 1:1 함수가 아닌 1:다 함수로 변환

function get_members() {
    return ['sorialgi', 'k8805', 'sorialgi'];
}

var members = get_members();    // 함수를 변수(그릇)에 담아야 호출할 수 있다
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);



// 배열의 사용
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(members[i].toUpperCase());   
    document.write('<br />');
}
// => 결과 : 
// EGOING
// K8805
// SORIALGI
//



// 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');   // 하나씩 뒤에 추가
alert(li);
// => 결과 : ['a', 'b', 'c', 'd', 'e', 'f']

li = li.concat(['f', 'g']);   // 여러개를 한번에 뒤에 추가
alert(li);
// => 결과 : ['a', 'b', 'c', 'd', 'e', 'f', 'g']

li.unshift('z');   // 앞에 추가
// => 결과 : ['z, 'a', 'b', 'c', 'd', 'e']


array.splice(index, howmany, element1, ...li, elementN);
// (배열에 추가 될 위치, 갯수, 추가할 원소)

var a = ['a', 'b', 'c'];
a // 결과 : ["a", "b", "c"]

a.splice(1, 0, 'd');
// (1번 인덱스 = b, b의 직전 앞, 'd')
a // 결과 : ["a", "d", "b", "c"]

a.splice(1, 1, 'x', 'y');
// (1번 인덱스 = b, b부터 하나를 삭제(b가 삭제됨), 'x', 'y')
a // 결과 : ["a", "x", "y", "c"]



// 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();   // => 결과 : a
//앞에서부터 제거
li
// 결과 : ['b', 'c', 'd', 'e']

var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();   // => 결과 : e
//뒤에서부터 제거
li
// 결과 : ['a', 'b', 'c', 'd']



// 정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
alert(li);
// 결과 : ['a', 'b', 'c', 'd', 'e']

li.reverse();
alert(li);
// 결과 : ['e', 'd', 'c', 'b', 'a']
