---
layout: post
title: JavaScript constructor() & super() 
subtitle: 초간단 정리
description: 
image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
optimized_image: https://media.vlpt.us/images/leehaeun0/post/ef5f775f-53f5-4b49-8ccc-ff442d70b295/javascript-featured.png
category: Dev
tags:
  - Front-end
  - JavaScript
  - Memo
author: Freeyeon
---

### constructor(props) + super(props) ?

  + JavaScript에서 생성자를 만들 때 super() 선언 이후에 다른 구문을 사용해야되는데, 그 이유는 super()를 선언하지 않으면 constructor()안에서 this 키워드를 사용할 수 없기 때문이다.
  + 반면, React에서는 constructor()가 없어도, super()을 호출하지 않아도 this.props을 이용할 수 있다. 이유는 React는 **생성자 호출 이후에 props 속성을 세팅**해주기 때문이다. 
    - 그럼에도 React에서 constructor(props)+super(props)를 사용해 생성자에서 props를 초기화해줘야하는 이유는, **생성자 '내부'에서 this.prop를 사용하기 위해서**이다.
 


***

🔖 Postscript


--

📚 Reference

<a href="https://developer-talk.tistory.com/136">super()에 대하여 https://developer-talk.tistory.com/136</a> 


***



🐳 Next Post >> <a href="/React/">[ React란 무엇인가? ]</a>

<br>
<br>
