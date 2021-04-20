# 모듈 / UI 와 API 그리고 문서보는 법

## 모듈

* 코드를 여러 개의 파일로 분리하는 것
* 필요할 때마다 재활용 가능
* 수정 시 필요한 로직만 빠르게 검색 가능 / 메모리 낭비 최소화

```JavaScript
/* greeting.js */
function hello() {
    alert("안녕!");
}
```

```HTML
<!-- main.js -->
<script src="greeting.js"></script>
<script>hello();</script>
```

## 라이브러리

* 자주 사용되는 로직을 재사용하기 편하도록 정리한 코드 집합

## API

* Application Programming Interface
* 응용 프로그램에서 사용할 수 있도록, OS나 프로그래밍 언어가 제공하는 인터페이스
* ex) window.alert()는 OS가 제공하는 JavaScript API다
* ex) 기상청 API는 JSON 형태로 제공되는 Open API다

## 인터페이스

* 층과 층 사이의 연결. 사용자가 시스템 기능을 사용하도록 돕는 게 바로 User Interface
