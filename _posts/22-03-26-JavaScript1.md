---
layout: post
title: JavaScript 객체지향 Class 문법 
subtitle: 기초 원리 초간단 정리 (feat.코딩애플)
description: 
image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
optimized_image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
category: Dev
tags:
  - Front-end
  - JavsScript
author: Freeyeon
---


자바스크립트의 기본, 객체 지향 **Class** 문법에 대해 이해해보자.<br>

***

자바스크립트 object 자료형 만들려면 아래와 같이 만들 수 있다.

```javascript
var Sooyeon = {birth : '011117', hobby : 'drawing' }
```

그럼 이런 비슷한 자료형을 지닌 object를 '많이' 만들고 싶을때 어떻게 해야하나?

일일히 object 자료형의 Key값과 Value값을 반복해서 기입해줘야 하나? 그건 너무 비효율적이다.


```javascript
var Sooyeon = {birth : '011117', hobby : 'drawing' }


var Sookyeong = {birth : '980220', hobby : 'coding' }


var Myungshin = {birth : '651024', hobby : 'guitar' }


var Seungwon = {birth : '611208', hobby : 'fishing' }
```

=> 이렇게 비슷한 object를 많이 만들고 싶을떄, class를 사용하면 birth, hobby 이런 중복되는 Key값들을 반복해서 기입하지 않아도 된다. 

우리는 class를 이용해 우리가 원하는 object의 자료형의 Key값을 정의하고, 각 Key값에 원하는 Value 값을 담아 뽑아낼 수 있다.


```javascript

class Data() {
  constructor(){
  this.birth = '011117'
  this.hobby = 'drawing' }
}


var Sooyeon = new Data() 


>>Render

Sooyeon = {birth : '011117', hobby : 'drawing'}

```

Data()라는 class를 만들고, 그 안에 새로 생성되는 object(=this)가 어떤 자료를 가지는 지 기입했다.

예를 들어,<br>
**this.birth = '011117'** 의 뜻은,<br>
**새로 생성된 object의 자료 중 birth에 '011117'을 할당해라**이다.

하지만 이런 식으로 하나의 Key값에 단일한 Value값을 매겨버리면 이 class는 모든 this에 단일 데이터밖에 뱉어내지 못하는 바보가 된다. 

이때 우리는 Class 함수안에 파라미터를 활용해 <br>
Sexy하게 업그레이드해줄 수 있다.

즉, class에는 데이터의 Key값만 기입하고, 그 안에 기입할 단일한 값인 Value값은 새로 생성하는 object에서 정의, 파라미터로 꽂아넣어주는 것이다.


```javascript

class Data() {
  constructor(birth_data, hobby_data){
  this.birth = birth_data;
  this.hobby = hobby_data; }
}


var Sooyeon = new Data('011117','drawing') 

var Sookyeong = new Data('980220','coding') 

```

근데 2016년도 이전에는 이러한 class 기능을 function이 처리해주기도 했다. function으로 표현하려면 아래와 같이 기술하면 된다.


```javascript

function Data(birth_data, hobby_data) {
  this.birth = birth_data;
  this.hobby = hobby_data; 
}


var Sooyeon = new Data('011117','drawing') 

var Sookyeong = new Data('980220','coding') 

```

위 두 스크립트 모두 콘솔에서 출력해보면 아래와 같이 나온다.

>Console

```
Sooyeon = {birth : '011117', hobby : 'drawing'}

Sookyeong = {birth : '980220', hobby : 'coding' }
```


이런식으로 우린 비슷한 자료형의 object를 양산하지 않고,<br>
Class 문법을 활용해 간편하게 자료화하고 활용할 수 있다.


<br>
<br>

***



Next Post >> <a href="">[  ]</a>

<br>
<br>
