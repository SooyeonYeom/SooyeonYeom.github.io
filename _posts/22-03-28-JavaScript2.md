---
layout: post
title: JavaScript Arrow Function
subtitle: 화살표 함수 선언 방식 
description: 
image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
optimized_image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
category: Dev
tags:
  - Front-end
  - JavaScript
author: Freeyeon
---

화살표 함수(Arrow function)는 ES6문법이다. 왜 나왔는지, 기존 함수 선언 방식과는 무엇이 다른지 간단하게 정리해보자. 

***
# 기존의 function 

```javascript
function Hello(){
}

var Hello = function(){
}
```
기존에는 function 키워드로 시작해 함수를 만들거나(함수 선언),익명함수 앞에 등호를 붙여서 변수를 할당해주는 방식으로(함수 표현식) 함수를 만들어왔다.

- 함수 선언 : 스코프의 최상단으로 호이스팅됨
- 함수 표현식 : 호이스팅 되지 않고, 따라서 선언 전에는 호출할 수 없음


# Arrow  function 

그렇다면 **Arrow function**으로는 어떻게 함수를 만들까? 또, 장단점과 특징은 무엇이 있을지 살펴보자.

### ▶ 특징1 : 간결함

1) 키워드 대체 : 화살표 하나로 function이라는 키워드를 대체한다.
```javascript
var Hello = (a) => { return a ~ }
```

2) 소괄호 생략 : 매개변수가 하나라면 소괄호 생략이 가능하다.
```javascript
var Hello = a => { return a }
```

3) 중괄호 생략 : 함수 바디가 표현식 하나라면, 중괄호와 return문 모두 생략 가능하다.
```javascript
var Hello = a => a 
```

### ▶ 특징2 : 바깥의 함수 (또는 클래스)의 this 값을 가리킴 

```javascript
function Sooyeon()  {
  this.name = '수연';
  return {
    name: '수경',
    hello: () => {
      console.log('전 ' this.name + '입니다.');
    }
  }
}

const sooyeon = new Sooyeon();

sooyeon.hello(); 
```
#### 💬 코드설명 :
일반 함수 선언으로 만들어진 함수는 자신의 함수 내부의 this를 가리키기 때문에, this.name으로 '수경'을 반환했을 것이다. (sooyeon.hello() >> '전 수경입니다.')

그에 반해 arrow function은 자신이 종속된 인스턴스의 this를 가리키기 때문에 자신의 함수 밖의 this.name인 '수연'을 반환한다.(sooyeon.hello() >> '전 수연입니다.') 

즉, arrow function 자신의 함수가 아니라 **바로 바깥의 함수에 접근해서 this를 가리켜 내부에서 사용**한다.


### ▶ 특징3 : 생성자로 사용할 수 없음

```javascript
const Sooyeon = () => {};
const sooyeon = new Sooyeon();	
```
이렇게 짜면 에러가 발생한다. 즉, 생성자 함수로 사용할 수 없다.


***

🔖 Postscript

흐린 눈 했던 arrow function에 대해 간단히 정리해보았다. 
<br>

--

📚 Reference

<a href="https://codingapple.com/unit/es6-3-arrow-function-why/">Arrow function에 대하여 
https://codingapple.com/unit/es6-3-arrow-function</a>

***



🐳 Next Post >> <a href="/React/">[ React란 무엇인가? ]</a>

<br>
<br>
