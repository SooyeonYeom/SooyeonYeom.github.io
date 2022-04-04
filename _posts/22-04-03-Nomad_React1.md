---
layout: post
title: Nomad | ReactJS 초급 -1
subtitle: "THE BASICS OF REACT : ReactJS의 기본과 효용"
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
**#2 THE BASICS OF REACT** | **ReactJS의 기본과 효용**
#3 STATE | 데이터 업데이트 방식
#4 PROPS | 데이터 전달 방식
#5 CREATE REACT APP | ReactJS로 앱만들기
#6 EFFECTS | ReactJS의 효과
#7 PRACTICE MOVIE APP | ReactJS로 영화 웹서비스 만들기

***

# 바닐라JS로 만들면 ?

```html
<!DOCTYPE html>
<html>
<body>
    <span>You have clicked me : 0</span>
    <button id="btn">CLICK ME</button>
</body>
<script>

    let counter = 0;  
    const button = document.getElementById("btn"); 
    const span = document.querySelector("span") 

    function handleClick() {
        console.log('Clicked!');
        counter = counter + 1;
        span.innerText = 'You have clicked me : ' + counter;
    } 

    button.addEventListener('click', handleClick);
</script>
</html>
```
기존 바닐라JS로 쌩으로 짠 코드는 HTML에 생성한 object를 일일히 스크립트로 잡아온 후 이벤트리스너를 붙인 후 업데이트 함수를 짜서 넣어야했다.

# ReactJS로 만들면 ?

```html
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>

<script>
    const root = document.getElementById("root"); 
    const title = React.createElement("h3", 
    { style: { color: "hotpink" }, 
    onMouseEnter: () => console.log("mouse enter") }, "I am h3");

    const btn = React.createElement(
        "button", {
        onClick: () => console.log("Clicked!"), 
        //⭐property에 바로 eventlistener 등록⭐
        style: { backgroundColor: "skyblue" }
    },"I am button")
    const container = React.createElement("div", null, [title, btn]) 
    ReactDOM.render(container, root) 
</script>
</html>
```

반면, ReactJS에서는 object를 **'스크립트'에서 생성하고 'HTML'에 번역해** 보여준다.

심지어 생성한 object의 **property안에서 바로 eventlistener**를 등록할 수 있다!

즉 object를 **스크립트 상에서 쉽게 업데이트**하고 **업데이트 사항을 HTML에 바로 렌더**해줄 수 있는 것이다. 이게 바로 ReactJS가 지닌 효용이다. 

# React JSX ?

```html
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Babel = JSX 해석기 -->
<script type="text/babel">
    const root = document.getElementById("root");
    function Title() { return (<h3 onMouseEnter={() => console.log("mouse enter")}>"I am h3"</h3>) }
    const Btn = () => <button onClick={() => console.log("Clicked!")}>"I am button"</button>
    const Container = () => <div><Title /><Btn /></div>
    ReactDOM.render(<Container />, root) 
</script>
</html>
```
React에서는 JavaScript의 확장문법, **JSX**를 사용할 수 있다. 

JSX를 사용하면 위 예시처럼 같은 코드를 **더욱 짧고 편리**하게 만들 수 있다. (*createlement를 생략해버림) 

주의할 점은, JSX를 이용해 모든 컴포넌트를 만들땐 **앞글자가 대문자**여야하고 (소문자면 HTML 요소인 줄 앎) 

화면에 렌더하고 싶다면 **함수**로 만들어주어야 한다는 것이다. 

<br>
<br>



***

🔖 Postscript

THE BASICS OF REACT의 강의 내용 필기이다. 다음 포스팅은 STATE에 대한 내용이 될 것이다.


--

📚 Reference

<a href=""></a> 

<a href=""></a> 


***



🐳 Next Post >> <a href="/Nomad_React2">[ Nomad | ReactJS 초급 -2 ]</a>

<br>
<br>