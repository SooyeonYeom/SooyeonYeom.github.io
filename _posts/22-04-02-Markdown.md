---
layout: post
title: Markdown 문법
subtitle: 초간단 정리
description: 
image: https://user-images.githubusercontent.com/98953394/161272532-e79a65eb-ea6e-43e7-8df5-4a1384ef461f.png
optimized_image: https://user-images.githubusercontent.com/98953394/161272532-e79a65eb-ea6e-43e7-8df5-4a1384ef461f.png
category: Dev
tags:
  - Markdown
  - Github
  - Memo
author: Freeyeon
---

마크다운(Markdown)이란 **텍스트 기반** 마크업 언어로, **간편하게 HTML로 변환이 가능한 웹문서 언어**이다. 

쉽게 말하면 **글자에 서식을 적용**하는 직관적이고 간편한 언어라고 할 수 있는데, 깔끔한 텍스트 작성에 특화되어 있는 언어이기 때문에 **HTML보다 내부 구조가 단순**하다. 그래서 마크다운으로 글을 작성하면 **SEO(Search Engine Optimization) 최적화**에도 도움이 된다고 한다.  

지금 작성하고 있는 **포스팅**도 에디터에서 마크다운을 사용해 작성하고 있으며, 아래 첨부된 **깃허브 README**에도 마크다운 문법이 사용된다. 

![README](https://user-images.githubusercontent.com/98953394/161323713-602fced6-dfde-4438-a6ab-e70ee34128ed.png "README")

이곳 저곳 다양하게 쓰이는 만큼, 내가 자주 사용하는 마크다운 문법 위주로 정리해보려고 한다. 

***

# 마크다운 문법 

### ▶ 제목 

```markdown
# 제목 1 
## 제목 2 
### 제목 3
#### 제목 4 
##### 제목 5 
###### 제목 6 
```

HTML의 h1 ~ h6까지를 표현할 수 있다

### ▶ 목차 

```markdown
1. 목차
  1. 목차
    - 목차 
      + 목차
        * 목차 
```

순서있는 목차는 1.,2.,3. ~ 처럼 숫자를, 없게 사용하려면 -,+,*를 사용한다. tab으로 들여쓸 수 있다.

### ▶ 인용구

```markdown
> 인용구 1
> > 인용구 2
> > > 인용구 3
```

인용구 역시 '> (띄어쓰기) >'로 들여쓸 수 있다. 

### ▶ 구분선

```markdown
---

***

___
```
구분선은 -(마이너스), *(별), _(언더바) 3개를 연속으로 치면 된다. 

### ▶ 코드블럭

```markdown
    ```html

    ```

    ```javascript

    ```
```

코드블럭은 ` 3개를 앞뒤로 둔 후, 문법 하이라이팅을 위해 원하는 언어를 첫 ``` 뒤에 붙이면 된다. 

inline 코드블럭은 `가 앞뒤로 하나씩 붙는다. 

### ▶ 이미지

```markdown
![ALT태그](img.jpg "툴팁")

<img src="img.jpg" width="300px" height="300px" title="툴팁" alt="ALT태그"></img>
```

전자처럼 아주 쉽게 이미지를 넣을 수 있으나, 마크다운에서는 이미지 크기 조절이 안된다. 크기조절을 원할땐 아래처럼 기존 HTML을 사용하자.

### ▶ 링크

```markdown
[Freeyeon's Blog](https://sooyeonyeom.github.io/home)

<a href="https://sooyeonyeom.github.io/home">Freeyeon's Blog</a>
```

전자처럼 쉽게 링크를 걸 수 있다. 아래 HTML보다 훨씬 간편하다.

### ▶ 표

```markdown
#1 INTRODUCTION | ReactJS 및 수업 소개
#2 THE BASICS OF REACT | ReactJS의 기본과 효용
#3 STATE | 데이터 업데이트 방식
#4 PROPS | 데이터 전달 방식
#5 CREATE REACT APP | ReactJS로 앱만들기
#6 EFFECTS | ReactJS의 효과
#7 PRACTICE MOVIE APP | ReactJS로 영화 웹서비스 만들기
```

`|` 를 이용해 표도 만들 수 있다. 



<br>
<br>



***

🔖 Postscript

마크다운 문법에 대해 간략하게 정리해보았다.


--

📚 Reference

<a href=""></a> 

<a href=""></a> 


***



🐳 Next Post >> <a href="/Git">[ Git ? Github ? ]</a>

<br>
<br>