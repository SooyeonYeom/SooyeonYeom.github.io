---
layout: post
title: JavaScript Prototype
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

### 프로토타입(Prototype) 이란?

   + 정의 : 자식에게 부모가 데이터를 물려 줄 수 있는 숨겨진 루트. 부모 객체가 자식 객체에게 물려주는 원형의 정보. '유전자'라고 생각하면 쉽다. 
  + 쓰임 : 자식들에게 일일히 추가 데이터를 쓰지 않고 부모에게 전달함으로써 자식들이 일괄적으로 끌어다 쓸 수 있게 한다.
  + 입력 : [ 부모객체.prototype.Key값 = Value값 ]의 형태로 부모객체에게 데이터를 추가하거나 수정할 수 있다.
  + 출력 : [ 자식객체.추가한 Key값 ] = 추가한 Value값
  + 원리 : 
      객체.Key값 으로 Value값을 불러올때, 객체가 해당 Key값을 직접 지니고 있지 않으면 그 객체의 부모 프로토타입에 해당 Key값이 존재하는지 거슬러 올라가 확인한다. 거기도 없다면 부모의 부모 프로토타입까지 확인 => 아예 없을 때까지 거슬러 올라가 확인하는 동작 원리. (=Prototype Chain)

#### Then ..

↪ Array.length() / sort() .. 등등, 왜 우린 우리가 따로 전달하지 않았음에도, Array 안의 여러 함수들을 가져다 사용할 수 있었을까? 

💡 **Array.prototype에 해당 함수들이 존재하기 때문**이다 

❓ 그렇다면 기존의 Array의 프로토타입에 **내가 원하는 함수를 추가할 수 있나?**

❗ **가능하다!** 

```javascript
Array.prototype.함수 = function(){} 
```

***

🔖 Postscript

--

📚 Reference


<a href="https://www.youtube.com/watch?v=wUgmzvExL_E">Prototype에 대하여
https://www.youtube.com/watch?v=wUgmzvExL_E</a>


***



🐳 Next Post >> <a href="/React/">[ React란 무엇인가? ]</a>

<br>
<br>
