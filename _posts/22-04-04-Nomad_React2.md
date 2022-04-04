---
layout: post
title: Nomad | ReactJS 초급 -2
subtitle: "STATE : 데이터 업데이트 방식"
description: 
image: https://user-images.githubusercontent.com/98953394/160705078-f426d9cd-e464-418a-bb11-e94761a38086.png
optimized_image: https://user-images.githubusercontent.com/98953394/160705078-f426d9cd-e464-418a-bb11-e94761a38086.png
category: Dev
tags:
  - Front-end
  - React
  - Nomad
author: Freeyeon
---


#1 INTRODUCTION | ReactJS 및 수업 소개
#2 THE BASICS OF REACT | ReactJS의 기본과 효용
**#3 STATE** | **데이터 업데이트 방식**
#4 PROPS | 데이터 전달 방식
#5 CREATE REACT APP | ReactJS로 앱만들기
#6 EFFECTS | ReactJS의 효과
#7 PRACTICE MOVIE APP | ReactJS로 영화 웹서비스 만들기

***

# Why ReactJS ? 

기존 HTML은 리렌더링할때 컴포넌트 전체를 전부 다 리렌더링한다. (버튼,스판,변화값 모두 다) 반면, ReactJS는 **변화값만** 파악해 그 부분만 화면에 **업데이트**한다.

이러한 특징은 **동적 웹페이지의 변화 가능 요소들이 사용자와의 상호작용에 의해 리렌더링**될 때, 아주 유의미한 **효율성**을 제공해준다.

```html
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    let counter = 0;
    // [1] 변수 선언 후, JSX로는 바로 변수를 연결해줄 수 있다.
    function render() {
        ReactDOM.render(<App />, root)
    } // 렌더 함수 두번 이용해야함 (1) 최초 렌더 + (2) 이후 업데이트
    function countUp() {
        counter = counter + 1;
        render() //(2) 이후 업데이트 : 함수 실행 시 마다 달라진 화면 리렌더링
    } // [2] 함수 선언 후, JSX로는 바로 property에 함수를 연결해줄 수 있다.
    const App = () => 
    <div>
        <h3 >You have clicked me : {counter}</h3>
        <button onClick={countUp}>Clicked me!</button>
    </div>
    render() //(1) 최초 렌더 : 초기값 렌더링
</script>
</html>
```

#### 💬 About 'JSX' [1]~[2]
선언한 변수 또는 함수를 JSX로 바로 불러와 함수 안에서 사용하거나, 바로 객체의 props에 연결해줄 수 있다.

#### 💬 About 'ReactDOM.render' (1)~(2) 
변화에 따라 UI를 업데이트 해줄때, ReactDOM.render를 모든 함수의 끝에 실행시키는 방식으로 업데이트를 할 수는 있으나, 이는 불편하고 비효율적이다. 

ReactJS는 이런 방식을 사용하지 않는다. 여기서 우리는 ReactJSD의 데이터 업데이트 방식, **STATE**를 활용해야 한다.

<br>

# Why STATE ? 

**STATE**를 사용하면 위 코드의 한계점을 아주 쉽게 극복할 수 있다. 

```html
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    function App() {
        const [counter, setCounter] = React.useState(0); 
        // useState는 [데이터, 데이터변화감지->리렌더링 함수]를 array로 제공
        const onClick = () => {
            setCounter(counter + 1)
        }; 
        return (<div>
            <h3 >You have clicked me : {counter}</h3>
            <button onClick={onClick}>Clicked me!</button>
        </div>)
    }
    ReactDOM.render(<App />, root)
</script>

</html>
```

#### 💬 About 'useState'
useState는 **[데이터, 데이터변화감지->리렌더링 함수]**를 array로 제공해준다. 

위 코드를 살펴보자면, onClick 함수에 바로 `setCounter(counter + 1)`를 넣어줌으로써, onClick 이벤트가 발생했을 때 counter 숫자에 1 씩 더해지는 변화가 생기게 했다. 그리고 setCounter는 default값(0)에서 변화된 `(counter + 1)`를 감지해 변화값을 UI에 리렌더링하는 것이다.


❗ 그런데 `setCounter(counter + 1)`처럼, state 데이터를 바로 변수에 넣어서 계산하는 방식은 그렇게 안전하지 않다. React가 제공하는 현재값, `current`을 통해서 전달하는 게 더 안전하다. 


```html
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    function App() {
        const [counter, setCounter] = React.useState(0); 
        const onClick = () => {
            setCounter((current) => current + 1) 
        }; 
        return (<div>
            <h3 >You have clicked me : {counter}</h3>
            <button onClick={onClick}>Clicked me!</button>
        </div>)
    }
    ReactDOM.render(<App />, root)
</script>
</html>
```

`setCounter(counter + 1)`를 `setCounter((current) => current + 1)`로 대체할 수 있다. 현재값을 받아 (현재값 + 1)의 값을 반환하게끔 한 후, 반환된 변화값을 setCounter가 감지, UI에 리렌더링해주는 코드가 되었다.


<br>


***

🔖 Postscript

STATE 1부의 강의 내용 필기이다. 다음 포스팅은 STATE 2부로, STATE 응용에 대해 다룰 것이다.

--

📚 Reference

<a href=""></a> 

***



🐳 Next Post >> <a href="/Nomad_React3">[ Nomad | ReactJS 초급 -3 ]</a>

<br>
<br>