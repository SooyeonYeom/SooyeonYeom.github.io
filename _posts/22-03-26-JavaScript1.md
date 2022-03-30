---
layout: post
title: JavaScript Class 문법
subtitle: 기초개념 + 응용 및 심화 간단 정리
description: 
image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
optimized_image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
category: Dev
tags:
  - Front-end
  - JavaScript
author: Freeyeon
---


JavaScript의 **Class**에 대한 개념을 정리하지 않으면, 컴포넌트 단위로 돌아가는 React를 잘 이해하기 어렵다. 그렇다고 초보자 수준에서 너무 머리 아플 정도로 애쓰지 않아도 된다! 나이브하게 이해해보자.<br>

***
# Class 기초개념


자바스크립트 object 자료형 만들려면 아래와 같이 만들 수 있다.

```javascript
var Sooyeon = {birth : '011117', hobby : 'drawing' }
```

❓그럼 이런 비슷한 자료형을 지닌 object를 '많이' 만들고 싶을때 어떻게 해야하나?

```javascript
var Sooyeon = {birth : '011117', hobby : 'drawing' }


var Sookyeong = {birth : '980220', hobby : 'coding' }


var Myungshin = {birth : '651024', hobby : 'guitar' }


var Seungwon = {birth : '611208', hobby : 'fishing' }
```

위와 같이 일일히 object 자료형을 매번 반복해서 기입해줘야 하나? 그건 너무 비효율적이다.

이렇게 비슷한 object를 많이 만들고 싶을떄, **class**를 사용하면 birth, hobby 이런 중복되는 데이터들을 반복해서 기입하지 않아도 된다. 


즉, 우리는 class 문법을 이용해 **미리 우리가 원하는 object의 자료형의 큰 틀**을 정의하고, 인스턴스를 생성해 각기 다른 인스턴트의 자료형을 효율적으로 뽑아낼 수 있는 것이다.

```javascript
class Data() {
  constructor(){
  this.birth = '011117'
  this.hobby = 'drawing' }
}


var Sooyeon = new Data() 
```

>Console

```javascript
console log (Sooyeon)

>> Data {birth : '011117', hobby : 'drawing'}
```

#### 💬 코드설명 :
Data라는 클래스 객체를 선언한 후, constructor()로 클래스의 인스턴스 객체를 init했다. 이후 내가 원하는 자료형(일종의 Key값-Value값)을 인스턴스에 정의했다.

이때 Data 클래스에 별도의 생성자를 정의할 필요가 없었기에 **기본 생성자**를 사용했는데,
이처럼 아무것도 상속하지 않은 기본클래스일 때의 constructor()의 기본 생성자는 **빈 메서드**이다. 


🏷 그럼 만약 기본 클래스가 아닌, **자식클래스가 부모 클래스를 상속하는 경우**엔 어떨까?

<br>

***
## 🏷 막간을 사용한 React 공부 

자바스크립트를 기반으로 하는 React 앱이 이러한 class 기반의 부모-자식 컴포넌트의 상속이 활발히 일어난다. React 코드로 예시를 들어보면, 아래와 같다.

```javascript
class Siri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, Sooyeon. Nice to meet you.</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
#### 💬 코드설명 :
: Siri라는 클래스는 React.Component라는 부모클래스에서 파생된 자식 클래스이다.
constructor(props)로 클래스의 인스턴스 객체를 init해준다. 이후 내가 원하는 부모 클래스의 props를 인자로 받아온 후, 인스턴스의 props의 상태(state)가 {date: new Date()}, 즉 현재 시간인지 비교 후 변경 저장한다. (date = new Date() : 계속 변화하는 현재 날짜와 시간를 담는다.)

여기서, 우리는 React.Component의 props(부모가 자식에게 주는 값)을 호출해야 되기 때문에 기본 클래스일 때와 달리 constructor()에 생성자로 **props**를 넣어주어야 한다.

이후 이어질 다른 구문에 앞서 **super(props)**로 생성자 내에서 다시 한번 정의해준다.

(*super는 단지 재정의 뿐만 아니라, 자식클래스에서'만' 사용할 초기값을 지정하는 것도 가능하다.)

이 과정을 거치면 우리는 
this.state.date(=계속 변화하는 현재 시간).toLocaleTimeString(= Date 객체의 시간 부분을 문자열로 예쁘게 변환 후 반환하는 메소드)로 계속 변화하는 현재 시간을 화면에 렌더해볼 수 있다.


***

다시 돌아와서, class의 효용에 대해 더 알아보자.
아래는 리액트 언급 전에 있었던 코드를 그대로 가져온 것이다. 


```javascript
class Data() {
  constructor(){
  this.birth = '011117'
  this.hobby = 'drawing' }
}

var Sooyeon = new Data() 
var Sookyeong = new Data() 
```

위 코드의 뜻을 다시 줄글로 풀어보면, **'새로 생성된 object(인스턴스)의 자료에 birth에는 '011117'을, hobby에는 'drawing' 할당해라'**라는 뜻이다.

근데 문제가 하나있다.
이런 식으로 하나의 Key값에 단일한 Value값을 매겨버리면 이 class는 모든 인스턴스에 고정된 단일 데이터밖에 뱉어내지 못하게 된다. Sooyeon과 Sookyeong의 데이터가 같아지는 것이다. 

❓그럼 각 인스턴트의 데이터를 다르게 정보화시키고 싶을 땐 어떻게 하는가?

이때 우리는 파라미터를 활용해 줄 수 있다. 변수 구멍을 뚫는다고도 표현할 수 있다.


```javascript
class Data() {
  constructor(birthData, hobbyData){
  this.birth = birthData;
  this.hobby = hobbyData; }
}

var Sooyeon = new Data('011117','drawing') 

var Sookyeong = new Data('980220','coding') 
```
#### 💬 코드설명 :
class에는 데이터의 Key값만 기입하고, 그 안에 기입할 단일한 값인 Value값은 변수로 둔다. 이후 각 인스턴스에서 Key값의 순서에 맞게 Value값을 정의해주면, 파라미터는 이를 순서대로 인식해 자신의 내부에서 정보화한다.

이런식으로 우린 비슷한 자료형의 object를 양산하지 않고, Class 문법을 활용해 간편하게 자료화하고 활용할 수 있다.

이전에는 (자바스크립트에서 class 문법을 지원해주기 전) 이러한 기능을 function이 처리해주기도 했다. function으로 표현하려면 아래와 같이 기술하면 된다.

<br>

```javascript
function Data(birthData, hobbyData) {
  this.birth = birthData;
  this.hobby = hobbyData; 
}


var Sooyeon = new Data('011117','drawing') 

var Sookyeong = new Data('980220','coding') 
```

위 두 스크립트 모두 출력해보면 아래와 같이 나온다.


>Console

```javascript
console.log(Sooyeon)

>> Data {birth : '011117', hobby : 'drawing'}

onsole.log(Sookyeong)

>> Data {birth : '980220', hobby : 'coding' }
```

***
# Class 응용 

❓class 내부에서 메서드를 생성할 수도 있나?

당연히 가능하다. class 내부에 원하는 메서드를 만든 후, 해당 메서드를 호출하면 된다.

```javascript
class Data {
        constructor(birthData, hobbyData) {
            this.birth = birthData;
            this.hobby = hobbyData;
        }

        getbirth() {
            return [this.birth]
        }

        gethobby() { 
          return [this.hobby] 
          }

    }


    const Sooyeon = new Data('011117', 'drawing');
```

>Console 

```javascript
console.log(Sooyeon.getbirth())

>> "011117"

console.log(Sooyeon.gethobby())

>> "drawing"
```


❓class 외부에서 class 객체에 새로운 메서드를 추가할 수도 있는가?

가능하다! 단지 한계가 있다.

```javascript
class Data {
        constructor(birthData, hobbyData) {
            this.birth = birthData;
            this.hobby = hobbyData;
        }

        getbirth() {
            return [this.birth]
        }

        gethobby() { return [this.hobby] }

    }


    const Sooyeon = new Data('011117', 'drawing');


    Sooyeon.major = ('design');
```

>Console

```javascript
console.log(Sooyeon)

>>Data {birth: "011117", hobby: "drawing", major: "design"}
```

이와 같이 class 외부에서 class 인스턴스 객체에 major = 'design'이라는 정보를 추가할 수 있다.
그러나 이렇게 **class 외부에서 추가된 정보는, 후에 해당 class에서 다른 인스턴스를 찍어낼 때 적용되진 않는다.**

```javascript
class Data {
        constructor(birthData, hobbyData) {
            this.birth = birthData;
            this.hobby = hobbyData;
        }

        getbirth() {
            return [this.birth]
        }

        gethobby() { return [this.hobby] }

    }


    const Sooyeon = new Data('011117', 'drawing');


    Sooyeon.major = ('design');

    const Sookyeong = new Data('980220', 'coding', 'development');
```

>Console

```javascript
console.log(Sookyeong)

>>Data {birth: "980220", hobby: "coding"}
>>undefined
```

***
# Class 심화


자, 그럼 이러한 class 문법이 언제 가장 빛나는가? 바로 **상속(extends)**와 함께 할 때이다. 상속은 일종의 class의 확장이라고 생각하면 된다. 상속을 통해, 부모 클래스에서 파생된 자식 클래스는 부모의 데이터를 그대로 가지고 간다. 구문은 아래와 같다.

```javascript
class ChildClass extends ParentClass { ~ }
```

위와 같이 새로운 클래스를 만들때 뒤에 **'extends 부모클래스'**만 붙여주면 이 클래스를 해당 부모클래스의 자식클래스로 인식한다. 이렇게 만들어진 자식클래스는 부모 클래스에 쓰여진 데이터를 가져다 사용할 수 있게 된다. 


```javascript
    class Data {
        constructor(birth_data, hobby_data) {
            this.birth = birth_data;
            this.hobby = hobby_data;
        }

        getbirth() {return [this.birth]}

        gethobby() { return [this.hobby] }

    }


    class privateData extends Data {
        intro() {
            return `My birthdate is ${this.birth}, hobby is ${this.hobby}.`
        }
    }


    const Sooyeon = new privateData('011117', 'drawing');
```
#### 💬 코드설명 :
**Data를 부모클래스로 가진 privateData라는 자식클래스**를 만들어 준 후, 그 안에 intro()라는 자기소개 문구가 return되는 메서드를 작성했다. 이후 Sooyeon을 자식클래스에 인스턴스로 전달했다.

>Console

```javascript
console.log(Sooyeon.intro())

>> My birthdate is 011117, hobby is drawing.
```
분명 privateData 클래스 안에 인스턴스 자료형에 대한 정보를 적지 않았음에도, privateData는 자신의 부모클래스 정보를 가지고 있기에 Sooyeon이 제공한 Value 값을 부모클래스에서 정의한 인스턴스 자료형에 집어넣고, 이를 자신이 가지고 있는 메서드인 intro()에서 활용했다.



***

🔖 Postscript

이해하기 위해 대부분의 뜻을 내 언어로 바꾸다보니, 엄밀하지 않은 부분이 있을 것 같다. 그러나 초보자 수준에서 애써서 정리했다는 것에 의의를 두며... 첫 포스팅을 마친다! :)
<br>

--

📚 Reference

<a href="https://www.youtube.com/watch?v=vrhIxBWSJ04">객체지향 프로그래밍
https://www.youtube.com/watch?v=vrhIxBWSJ04 </a>

<a href="https://www.youtube.com/watch?v=dHrI-_xq1Vo">객체지향 Class 문법 
https://www.youtube.com/watch?v=dHrI-_xq1Vo </a>

<a href="https://www.youtube.com/watch?v=wUgmzvExL_E">Prototype에 대하여
https://www.youtube.com/watch?v=wUgmzvExL_E</a>


***



🐳 Next Post >> <a href="/React/">[ React란 무엇인가? ]</a>

<br>
<br>
