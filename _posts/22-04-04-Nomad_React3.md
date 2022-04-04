---
layout: post
title: Nomad | ReactJS 초급 -3
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

앞서 배운 STATE를 활용해, 

입력값을 

'분(min)'이라면 '시간(hr)'으로 / '시간(hr)'이라면 '분(min)'으로 

바꿔주는 변환기를 만들어보자.


# UI

```html
<!DOCTYPE html>
<html>
<body><div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function App() {
        return (
            <div>
                <h1> Super Converter </h1>
                <div>
                    <label htmlFor="min">Minutes</label>
                    <input id="min" placeholder="Minutes" type="number"/>
                </div>
                <div>
                    <label htmlFor="hr">Hours</label>
                    <input id="hr" placeholder="Hours" type="number"/>
                </div>
                <button>RESET</button>
                <button>FLIP</button>
            </div>
        );
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
</script>
</html>
```

먼저, 구현하고 싶은 UI를 JSX로 화면에 그려준다. 

1. Minutes input 창
2. Hours input 창
3. RESET 버튼
4. FLIP 버튼

이제 만들고 싶은 변환기의 기능을 구체적으로 상상해보자.

**Task1** : Minutes input에 입력값을 넣으면 비활성화된 Hours input에 변환값이 나오고, 

**Task2** : FLIP을 누르면 Hours input을 활성화 + Minutes input을 비활성화한 후 역방향 계산이 가능하고,

**Task3** : RESET을 누르면 input안의 입력값 + 변환값들이 0으로 리셋되는 변환기


# Task1

```html
<!DOCTYPE html>
<html>
<body><div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function App() {
        const [amount, setAmount] = React.useState(0); 
        const onChange = (event) => {
            setAmount(event.target.value); 
        }
        return (
            <div>
                <h1> Super Converter </h1>
                <div>
                    <label htmlFor="min">Minutes</label>
                    <input value={amount} 
                    onChange={onChange} id="min"
                    placeholder="Minutes" type="number" />
                </div>
                <div>
                    <label htmlFor="hr">Hours</label>
                    <input value={Math.round(amount / 60)} 
                    onChange={onChange} id="hr"
                    placeholder="Hours" type="number" disabled />
                </div>
                <button>RESET</button>
                <button>FLIP</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
</script>
</html>
```
#### 💬 Task1
**: Minutes input에 입력값을 넣으면 비활성화된 Hours input에 변환값이 나오기**

가장 먼저 두 input창 모두에게 입력값을 연결시켜줘야한다.

여기서 입력값 amount는 사용자의 입력에 따라 계속 변화되기 때문에, useState가 제공하는 data로 지정한다. 

두 input창의 value에 amount를 연결 시켜주되, Hours input에는 `Math.round(amount / 60)`를 넣어 변환값이 그려지도록 한다.

이후 업데이트 사항을 UI에 반영하기 위해 이벤트리스너 onChange를 양 쪽에 등록해준다.

onChange 이벤트 발생 시 `setAmount(event.target.value)`가 실행되는데, 

이로써 이벤트가 발생하면서 얻은 value값, 즉 사용자의 입력값이 setAmount에 전달되고, setAmount는 default값(0)에서 변화된 입력값을 감지, 화면에 리렌더링해준다.

이때 입력값은 amount로, Minutes input에는 입력 그대로 표시될테고, Hours input에는 변환값이 나올 것이다.


# Task2

```html
<!DOCTYPE html>
<html>
<body><div id="root"></div></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function App() {
        const [amount, setAmount] = React.useState(0);
        const [flip, setFlip] = React.useState(false); 
        const onChange = (event) => {
            setAmount(event.target.value);
        }
        const onFlip = () => {
            setFlip(current => !current);
        }
        return (
            <div>
                <h1> Super Converter </h1>
                <div>
                    <label htmlFor="min">Minutes</label>
                    <input value={flip === true ? amount * 60 : amount} onChange={onChange} id="min"
                        placeholder="Minutes" type="number" disabled={flip === true} />
                </div>
                <div>
                    <label htmlFor="hr">Hours</label>
                    <input value={flip === true ? amount : Math.round(amount / 60)} onChange={onChange} id="hr"
                        placeholder="Hours" type="number" disabled={flip === false} />
                </div>
                <button>RESET</button>
                <button onClick={onFlip}>{flip ? "Convert Mins to Hrs" : "Convert  Hrs to Mins"}</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
</script>
</html>
```
#### 💬 Task2
**FLIP을 누르면 Hours input을 활성화 + Minutes input을 비활성화한 후 역방향 계산**

FLIP 버튼에 이벤트리스너 onClick를 등록해주고 이벤트 발생 시 onFlip 함수가 실행되게끔 한다. onFlip 함수는 현재 state데이터값(flip)을 현재의 반대값(false->true/true->false)으로 전환시켜준 후 이를 setAmount에 넘겨 리렌더링 해주는 함수이다.

전환된 데이터 flip(false/true)은 Hours input와 Minutes input의 disabled값을 결정하게 된다.

flip이 일땐 false일땐 Hours가 disabled되게 해놓았고, flip 값이 true일땐 Minutes가 disabled되게 했다. (*default flip 값은 false로 두었다.)

또, 각각이 disabled 된 후 보여주는 value값은 변환값이여야 하니, 각 input의 value에 경우에 따라 입력값 / 변환값을 그리게끔 조건문을 넣었다. 

**IF** 

내가 disabled 되었다면 저쪽에서 입력하는 입력값의 변환값을 출력하고,

**ELSE** 

저쪽이 disabled 되었다면 내 쪽에서 입력하고 있는 입력값을 그대로 출력해줘



# Task3

```html
<!DOCTYPE html>
<html>
<body><div id="root"></div></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function App() {
        const [amount, setAmount] = React.useState(0); 
        const [flip, setFlip] = React.useState(false); 
        const onChange = (event) => {
            setAmount(event.target.value);
        }
        const reset = () => setAmount(0);
        const onFlip = () => {
            reset()
            setFlip(current => !current);
        }
        return (
            <div>
                <h1> Super Converter </h1>
                <div>
                    <label htmlFor="min">Minutes</label>
                    <input value={flip === true ? amount * 60 : amount} onChange={onChange} id="min"
                        placeholder="Minutes" type="number" disabled={flip === true} />
                </div>
                <div>
                    <label htmlFor="hr">Hours</label>
                    <input value={flip === true ? amount : Math.round(amount / 60)} onChange={onChange} id="hr"
                        placeholder="Hours" type="number" disabled={flip === false} />
                </div>
                <button onClick={reset}>RESET</button>
                <button onClick={onFlip}>{flip ? "Convert Mins to Hrs" : "Convert  Hrs to Mins"}</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
</script>

</html>
```
#### 💬 Task3
**RESET을 누르면 input안의 입력값 & 변환값들이 모두 0으로 리셋**

RESET 버튼에도 이벤트리스너 onClick을 등록한 후, reset함수에 state데이터를 무조건 0으로 바꿔 setAmount에 전달, 리렌더링하는 코드를 넣는다. 

onFlip함수에도 전환이 실행될 때마다 초기값이 모든 입력값 변환값들이 0으로 변하게끔, reset함수를 넣어준다.


그럼 변환기 코드 완성이다.


<br>

# Challenge

위 내용을 강의 중에 배운 후, 스스로 해보는 챌린지가 주어졌다.

**Challenge1** : Km-Miles 변환기 만들기

**Challenge2** : Default / Min_Hrs / Km_Miles 선택창 만들기


```html
<!DOCTYPE html>
<html>
<body><div id="root"></div></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Min_Hrs() {...}

    function Km_Miles() {
        const [amount, setAmount] = React.useState(0)
        const [flip, setFlip] = React.useState(false)
        const onChange = (event) => {setAmount(event.target.value)}
        const reset = () => {setAmount(0)}
        const flipped = () => {reset() setFlip(current => !current)}
        return (
            <div>
                <div>
                    <label htmlfor="KM">Kilometers</label>
                    <input value={flip ? amount * 1.609344 : amount} onChange={onChange} id="KM" placeholder="Kilometers" type="number" disabled={flip}></input>
                </div>
                <div>
                    <label htmlfor="M">Miles</label>
                    <input value={flip ? amount : amount / 1.609344} onChange={onChange} id="M" placeholder="Miles" type="number" disabled={!flip}></input>
                </div>
                <button onClick={reset}>RESET</button>
                <button value={flip} onClick={flipped}>{flip ? "Convert KM to M" : "Convert M to KM"} </button>
            </div>
        );
    }
    // Divide and Conquer 분할 정복
    function App() {
        const [index, setIndex] = React.useState("default")
        const onSelect = (event) => {setIndex(event.target.value)}
        return (
            <div>
                <h1> Super Converter </h1>
                <select value={index} onChange={onSelect}>
                    <option value="default">What you want to Convert?</option>
                    <option value="0">Min-Hrs</option>
                    <option value="1">KM-M</option>
                </select>
                {index === "default" ? "Please select!" : null}
                {index === "0" ? <Min_Hrs /> : null}
                {index === "1" ? <Km_Miles /> : null}
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
</script>
</html>
```

챌린지도 동일한 방법을 사용하여 만들었다. 직접 코드를 작성하면서 useState에 익숙해졌고, 활용법을 더 잘 이해할 수 있었다. 



***

🔖 Postscript

STATE 2부의 강의 내용 필기이다. 다음 포스팅은 PROPS에 대한 내용이 될 것이다.

--

📚 Reference

<a href=""></a> 

***



🐳 Next Post >> <a href="/Nomad_React4">[ Nomad | ReactJS 초급 -4 ]</a>

<br>
<br>