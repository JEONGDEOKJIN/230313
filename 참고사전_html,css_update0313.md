
## ✍ 중요 태그 및 CSS 요약 
### 선택자…
#### 선택자 ⭐️⭐️⭐️⭐️⭐️
#### 레이아웃 할 때 id 를 쓴다고 했는데... 그렇게 써볼까?
#### > 이거랑 다른거랑 뭐가 다른거지? 
#### 선택자를 다르게 해서 효율적인 경우는??? 




### display

```


.display {

display: block;

/* block은 블록 요소, div태그의 기본값, 자기의 너비를 전부 갖고 옆에 아무도 없어야 한다. */

display: inline;

/* 인라인, span, a 등등 기본값을 인라인으로 가지고 있고 옆으로 태그가 자리 할수 있다. */

display: flex;

/* 자식 태그들을 정렬시킬수 있다. 정렬시키는 방식은 여러가지 있다. */

display: inherit;

/* 부모한테 값을 가져와서 적용시킨다. 사용할 일이 거의 없긴함 */

display: initial;

/* 태그가 기본적으로 가지고 있던 속성으로 초기화 기본값으로 적용 */

display: none;

/* 화면에서 지운다 태그를 보이지 않게 지워 버린다. 나중에 자바스크립트에서 display속성이

none으로 적용되어 있으면 선택이 되지 않는다. */

}

```
출처 : https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/style.css



#### display 기초 및 fixed

```

<!-- div는 블록 요소를 가지고 있는데 -->

<div style="width: 500px;">

<div style="display : block">

속성을 추가 할때

속성 명 = "속성 값"

display : 영역의 노출 크기를 어떻게 설정할지 기준을 설정한다.

부모 태그를 기준으로 모든 너비를 차지한다. 높이는 자식의 기준으로

</div>

</div>

<div style="width: 100%;">

<div style="width: 200px; height: 200px; border: 1px solid; display: inline-block;"></div>

<div style="width: 200px; height: 200px; border: 1px solid; display: inline-block;"></div>

</div>

<!-- inline은 자신의 크기 만큼만 영역을 차지한다. -->

<!-- display flex를 알아보자 -->

<div style="display: flex;">

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

<div style="width: 200px; height: 200px; border: 1px solid;"></div>

</div>

<div>

<h1 style="color : red">경일 게임 아카데미</h1>

<h2 style="color : blue">경일 게임 아카데미</h2>

<h3 style="color : aqua">경일 게임 아카데미</h3>

</div>

```

https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/index.html




### width, height 

```
.wh{

width: 100px;

/* 태그의 너비 */

height: 100px;

/* 태그의 높이 */

width: max-content;

/* 가지고있는 자식 태그의 너비 만큼 차지한다. */

width: min-content;

/* 자식 태그의 최소만큼 너비를 차지한다. */

max-width: 100px;

/* 설정한 너비 이상으로 태그의 너비가 넓어지지 않는다. 최대 너비 */

min-width: 100px;

/* 설정한 너비 이하로 태그의 너비가 줄어들지 않는다. 최소 너비 */

}

```
https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/style.css





### overflow

```

.content{

width: 100px;

height: 100px;

overflow: hidden;

/* 자식의 태그가 부모영역 이상으로 보이지 않게 설정 */

overflow: scroll;

/* 자식의 태그의 내용을 스크롤 처리 할것이냐? */

/* 스크롤 방향을 x축으로 만들거냐? y축으로 만들거냐? */

overflow-x: hidden;

overflow-y: scroll;

/* y축만 스크롤 가능하게 */

overflow-x: scroll;

overflow-y: hidden;

/* x축만 스크롤 가능하게 */

opacity: 0.1;

/* 투명도를 설정해줄수 있다. 1이 최대치 100% */

}

```

- 출처 : https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/style.css

[깃헙 day03 주소](https://github.com/ojhhh/lunch)




### text 

```

text{

font-size: 16px;

/* 글씨의 크기 pc 크롬 기준 기본값이 16px */

/* 환경에 따라 기본 값이 다를수 있다 모바일,pc 브라우저에 따라 */

font-weight: 500;

/* 글씨의 굵기 */

/* 기본값은 500이고 글꼴을 가져왔을땐 기본값이 변할수 있다. */

color: rgba(0, 13, 255, 0.5);

/* 글씨의 색 rgb(), rgba() 등등으로 설정이 가능하다 */

text-align: center;

/* 글자의 정렬을 가운데로 */

text-align: end;

/* 오른쪽 끝으로 정렬 */

text-align: start;

/* 왼쪽 끝으로 정렬 */

text-decoration: overline;

/* 텍스트에 줄긋기 */

text-decoration: underline;

/* 텍스트에 밑줄 추가 */

text-decoration: none;

/* 텍스트 꾸밈 요소 제거 */

letter-spacing: 10px;

/* 글자의 간격 */

```


https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/style.css



### input, label 태그


```

<label for="">아이디</label>

<!-- input을 사용할때 라벨 붙이는것처럼 input태그의 이름 -->

<input type="text" id="user_id">

<!--

input태그 타입

hidden : 사용자에게 보이지 않지만 서버로 값을 넘길수 있다.

search : 검색 상자를 넣는다.

tel : 전화번호를 입력하는 필드를 넣는다.

url : url주소를 입력할수 있는 필드를 넣는다.

email : 메일주소를 입력할수 있는 필드를 넣는다.

password : 비밀번호를 입력할수 있는 필드를 넣는다.

datetime : 국제 표준시로 설정된 날짜와 시간을 넣는다.

date : 사용자 지역을 기준으로 날짜 연,월,일을 넣는다.

month : 사용자 지역을 기준으로 날짜 연,월

week : 사용자 지역 기준 연,주

range : 숫자로된 수치를 조절할수 있는 슬라이드 막대를 만든다.

color : 색상표를 만든다.

checkbox : 주어진 항목에서 2개이상 선택 가능한 체크 박스

radio : 1개만 선택할수있는 체크박스를 만든다.

file : 파일을 첨부할수 있는 버튼

image : 버튼대신 사용할 이미지를 넣는다.

button : 버튼을 넣는다.

-->

```
https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/input.html


### link 태그


```

<link rel="stylesheet" href="./style.css">

<!-- link 태그는 외부의 css파일이나 favicon을 가져올때 주로 사용한다.

favicon은 브라우저의 아이콘 이미지 -->

```

https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/index2.html




### ol, ul, li 태그 

#### 핵심 
	1. ol, ul 는 리스트의 종류 
	2. ol 또는 ul 은 반드시 list 태그와 함께 써야 함 
	3. 유튜브 썸네일 처럼, 구역을 나누는 것으로 사용할 수 있음. 



#### 학습 자료  출처 
- 교수님 수업 자료 
	- [[230228](https://github.com/JEONGDEOKJIN/230228)]





### 기본 CSS 모음


```

<div style="width: 100%; height: 60px; background-color: rgb(2, 255, 0); padding: 0 0; margin: 0; box-sizing: border-box;"></div>

style 속성 = CSS(Cascading stlye sheets) <br>

width : 너비, max-width, min-width <br>

height : 높이, max-height, min-height <br>

background-color : 배경색, 색상을 태그에 입힐수 있다., rgb(255,255,255);

padding(태그 내부 여백), margin(외부의 여백) : top, right, bottom, left

값을 한개만썼을때 사방면이 그값으로 적용된다.

각각 지정하고 싶을땐 4개 값 모두 작성 해줘도 된다.

값을 두개 작성했을때 상하 좌우 값을 적용 할수 있다.

box-sizing : 박스의 크기를 어떻게 설정할지 기준을 설정



https://github.com/JEONGDEOKJIN/230302/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/index.html



```

## [토이플젝] 리스트 써서 유튜브 만들기

- 링크
https://github.com/JEONGDEOKJIN/230303/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/%EC%9C%A0%ED%8A%9C%EB%B8%8C/main.html



### 이렇게 CSS 를 짜면, 좀 더 효율적일 것 같음

우선 이 방식을 익혀보자

https://github.com/JEONGDEOKJIN/230303/blob/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C/%EC%9C%A0%ED%8A%9C%EB%B8%8C/main.css

---

## 🧱 [기능 block] 만든 것 🔵🔵🔵 
### 각 item area 사이에 간격 잡기 

#### 여기에서는 (가장 상위 레벨에서) padding 을 줬음. 
- ![](https://i.imgur.com/NMdnfio.png)


``` css
/* 토글 세트 작성 */

.toggle_item_frame {
    display: flex;
    /* background-color: lightgreen; */
    width: 700px;

    padding: 3px 2px;
```







### 점점점으로 줄이게 하기 


- 하고 싶은 것 
	- 글자 길면 -> 점점점![](https://i.imgur.com/Y51iXQ3.png)

<br>

2. CSS 코드 요약 ⭐⭐⭐ 

``` css 
/* 점점점, 1줄로 써지게 하기 
    ✅ width, height 없이도 가능
    ✅ 이걸, p태그를 감싸는 container 에게 하면 error 
    ✅ 이걸 p태그에 걸어줘야 함. 
                               */
p {
	/* 넘어가면, 사라지게 하기 */
    overflow: hidden;
    
	/* 쩜쩜쩜 모양, dots */
    text-overflow: ellipsis;

	/* 무조건 1줄로 써지게 하기 ✅✅  */
	white-space: nowrap;

	/* 한줄로 오게 하기 📛 테스트 필요*/
    display: inline-block;
}
```

<br>

3. 코드 해석 

1) 어디에 class 를 줘야 하지? 
	- P 태그, H 태그 같이, ==글자를 쓰느 태그 자체==에 class 를 줘야 한다. ![](https://i.imgur.com/1k2CB3X.png)

<br>
2) 해석 
	- 우선 한줄로 줄여주고 
	- 여기에서 정한 width 를 넘으면 
	- 점점점으로 만들어줘

<br>
3) 이걸, 'P 태그 선택자' 를 써서 -> 모든 CSS 에 기본 디폴트로 작동시킴 ⭐⭐⭐⭐⭐ 

<br>

- 위 내용 출처 
	- [[202303090922_2주차_day04_팀작업 및 수업 내용#점점점으로 줄이게 하는 방법]]
- 참고한 블로그 
		- https://bit.ly/3JybQP4







### [해당 페이지, 순간이동] 1) 해당 페이지에서 2) 특정 버튼 누르면 3) 특정 부분으로 이동하게 하기 (그 페이지에서 순간이동 느낌)


#### 요약 
```
 - 해당 페이지 최상단으로 이동하기 
 1) a태그의 href에 2) #을 작성하고 3) 해당 링크 클릭하면 4) 그 페이지의 최상단으로 이동 
<a href="#"> 이걸 누르면 -> 최상단으로 이동!  </a>

 - 해당 페이지 '원하는 곳'으로 이동하기 
 1) a태그의 href에 2) '# + 태그 id'⭐⭐ 를 작성하고 3) 해당 링크 클릭하면 4) 그 페이지의 최상단으로 이동 
<a href="#move_down"> 이걸 누르면 -> move_down 이라는 ⭐id⭐ 로 이동 </a>

```

- 출처 : [230228](https://github.com/JEONGDEOKJIN/230228)/[교수님공유자료](https://github.com/JEONGDEOKJIN/230228/tree/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C)/**index.html**]




#### 혼자 해본 것
- 👇 그냥 혼자 해본 것 
```

<!-- 여기를 클릭하면 -> 밑으로 슉 이동함 -->
<a href="#move_down"> 이걸 누르면 이동할까? </a>


<!-- 여기는 점프 하는 곳  -->
    <h1> 이곳을 jump! 해서~ </h1>
    <img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1q2r/image/ja0uBtK1CFsvJN6LLJ42ThXJMAM.jpg" alt="">
    <img src="https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1q2r/image/W_3XKP0hStg_ft4GneHatHt7Rdw.jpg" alt="">
    <img src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1q2r/image/j1i8fc8NMniJ0rwPwgzafdTwIbQ.jpg" alt="">


<!-- 좌잔, 여기로 도착 ✅✅ -->
<div id="move_down">
	<p>도차악~ 이동 완료~ 🤟🤟🤟🤟🤟</p>
</div>


```



## 🧱 [기능 block] 보완할 것 📛📛📛 
### 클래스 위계와 위계별 CSS 전략 (각 div 마다 무슨 일을 하는지 명확히 알아야 해⭐⭐⭐⭐⭐⭐ )

-  area /  container - content 

- 각 class 이름을 보고 -> 대략 어떤 느낌들인지 알 수 있지 않으려나 

- 다만, 내가 해보고 싶은게 왜 되는지를 알고, 각 class 의 위계마다 역할을 이해해야 함 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 

#### 예시 


- class 이름을 지을 때,
	- `area` level 
		- 색상 : a 눌러서 보이는 거 
		- 기능 : 전체 영역 
	- `frame`
		- 색상 : 
		- 기능 

- area 만 따로, class 를 줄 수 있으려나? 
- 



--- 

#### 접근 : 노션은 ==하나의 `div` 를 25px== 로 해서, 1) 링크 2) quote 등등을 만든다. -> 이런 방식이 있는 건가? ❓❓❓❓❓ 



#### CSS 작성할 때 접근 순서 

1. 레이아웃 = id 로 하자 
2. '공통 태그' 에 '다른 스타일' 을 줄 때, class 이름을 쓰자. 
	- '공통 태그' 로 꾸며줄 수 있는 건, 공통 태그로 꾸미기 
	- 공통 태그에 '다른 스타일' 줄 때, class 명 주자
(- 참고 [[📚_202303090756_html&css정리_참고사전_레퍼런스 ⭐⭐#선택자 ⭐️⭐️⭐️⭐️⭐️]])


##### 이게 먹히려나? 해보자 

[여기서, 하나 골라서, 만들어보자](https://kgaplan.oopy.io/)
![](https://i.imgur.com/9Uwkj0f.png)










### 이렇게 긴 사진을 넣었을 때, 자동으로 커지게 하는 건 뭘까. 

#### 문제상황
- 출처 : [[202303090922_2주차_day04_팀작업 및 수업 내용#이렇게 긴 사진을 넣었을 때, 자동으로 커지게 하는 건 뭘까.]]
- 
- ![](https://i.imgur.com/01gyYKI.png)


#### 관련 있어 보이는 문제 

- 출처 : [[202303090922_2주차_day04_팀작업 및 수업 내용#🤟텍스트 크기에 따라서 밑줄을 그으려면, width 를 따로 적지 않으면 됨.]]
- 🤟텍스트 크기에 따라서 밑줄을 그으려면, width 를 따로 적지 않으면 됨. 
	- ![](https://i.imgur.com/tKMrGyU.png)

<br>


### '정렬' 하는게 아직 익숙하지 않음. 

- ex) 이미지를 딱 맞게 가운데로 오게 하기


#### [관련문제] 이모지 사이즈 조절 

- ==이모지== 를 넣을 때, `span` 에 넣으면 -> width, height 가 아니라, `font-size` 로 크기가 조절 됨 (출처 : [[202303090922_2주차_day04_팀작업 및 수업 내용#요기 아이콘 사이즈 조절]]) 





--- 

## 🕵️‍♂️ 이론, 개념

### block, inline, 욕심쟁이랑, 양보쟁이들

```
div 의 디폴트 셋팅은 욕심쟁이 (display block)

span 의 디폴트 셋팅은 양보쟁이 (display inline block)
```

- 출처 : [230228](https://github.com/JEONGDEOKJIN/230228)/[교수님공유자료](https://github.com/JEONGDEOKJIN/230228/tree/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C)/**index.html]



### table 태그 

- 출처 [[230228](https://github.com/JEONGDEOKJIN/230228)/[교수님공유자료](https://github.com/JEONGDEOKJIN/230228/tree/master/%EA%B5%90%EC%88%98%EB%8B%98%EA%B3%B5%EC%9C%A0%EC%9E%90%EB%A3%8C)/table.html]



### 선택자 ⭐⭐⭐⭐⭐ 


``` css
1️⃣ tag 선택
- 태그 1개 선택 
div {
color: blueviolet;
}

- '모든' 태그 선택 
*{
color: aquamarine;
}


2️⃣ id 선택
- id 속성의 스타일을 우선으로 한다.
- id 는 문서 안에서 한번만! 
- 중복되면 안 되고, 'unique' 해야 함. (반에서 모든 이름이 개별적이니까)
- '레이아웃' 스타일 지정
- '자바 스크립트' 사용시, '웹 요소 구분' 위해 사용

/*예제 코드*/ 
#test {
color : blue;
}


3️⃣ class 선택
- '동일 태그' 에 '다른 스타일' 을 줄 때 
- 클래스명 '중복' 가능

/*예제 코드*/ 
.block7{
color: aqua;
}

/* 같은 속성이 두번 작성되었을때 맨 밑으로 작성된 속성이 적용 된다. */
.block7{
color: blue;
}


4️⃣ '자식' 선택⭐⭐⭐ 

- '태그 자식' 선택하기 ⭐⭐⭐ 
/* 부모태그 div의 p자식 태그 선택자 */
div p{
/* 부모 태그 안에 자식태그에 스타일을 주고 싶을때 */
}

- 'class 자식'  ⭐⭐⭐⭐⭐
.test .content{
	/* test클래스를 가지고 있는 태그의 자식 태그중 content 클래스를 가지고 있는 태그 */
	/* 
		<div class="test">
			<div class="content">
				이 자식 태그가 스타일이 적용됨
			</div>
		</div>
	*/
}


- '바로 아래 자식(장손선택)' ⭐⭐⭐ 
        /* 자식 태그중 해당 클래스를 가지고 있고 바로 아래 자식일때 */
        .test > .content{
            /* test클래스를 가지고 있는 태그 자식중 content클래스를 가지고 있는 자식중에 제일 첫번째 자식 */
            /* 
                <div class="test">
                  <div class="content">
                    이 태그만 스타일이 적용 된다.
                  </div>  
                  <div class="content">
                  </div>  
                  <div class="content">
                  </div>  
                </div>
            */
        }



5️⃣ '복수' 선택 ⭐⭐⭐ 

- '복수 클래스' 선택 
/* test클래스와 content클래스를 둘다 가지고 있는 태그 */
.test.content{
	/* 두 클래스를 모두 가지고 있을때 적용 */
	/* 
		<div class="test content"></div>
	*/
}

- '복수 태그' 선택
div,h1{
color: brown;
}


6️⃣ 형제 선택 ⭐⭐⭐ 





```