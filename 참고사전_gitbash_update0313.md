


## 터미널(terminal) / 깃 배쉬(git bash) 명령어 

``` 
<!-- 현재 폴더의 루트 경로는 / 경로의 시작점 -->
/ 

<!-- 현재 파일의 동일 선상 경로는 ./ -->
./ 

<!-- 현재 파일의 상위 선상 경로는 ../ -->
../

```




# <b> 1️⃣ 이번 회차 학습 목표 (goal) </b>
--- 

## 1. 배우고자 하는 것 


- 깃 가입 및 설치 
- 브랜치 생성 및 병합(merge)

<br>



# <b> 2️⃣ 요약   </b>   
--- 



## 1. 요약 

### 1) git 설치 및 pull, push 

```
[1️⃣ pull] 
1. '작업 하고자 하는 폴더(로컬 pc 의 폴더, vs code 에서 연 폴더)' 와 'terminal 폴더(teminal 이 가리키고 있는 폴더)' 일치 시키기

2. 깃 파일 만들기
git init 

3. 원격 저장소 연결 
git remote add origin https://github.com/JEONGDEOKJIN/230306.git


3.1 오류 발생 해결 
git remote remove origin
git remote add origin

4. pull 명령어 git remote remove origin

git pull origin master


[2️⃣ push]
1. 폴더 일치 

2. staging 시키기 
git add 파일 이름 : ⭐⭐⭐ 띄어쓰기 중요
ex) $ git add ./ 0307_share3.html

git add . : 모든 파일 스테이징 ⭐⭐⭐띄어쓰기 중요


3. commit 작성 
git commit -m "메시지 내용 작성"

4. 원격 저장소 연결 
git remote add origin https://github.com/JEONGDEOKJIN/230308.git
git remote add origin https://github.com/jiwoog0/230307_share3.git

4.1 오류 발생 해결 
git remote remove origin
git remote add origin

5. push 명령어 
git push -u origin master
git push -u origin main

git push origin master ⭐⭐⭐ (이걸로)
git push origin main
cf. git branch 로 master 인지, main 인지 확인


[✅ 단축키]
cntrl ` : vscode 에서 터미널 열기 / git bash 열기 

[✅ 재설치 하게 될 경우, git 들어가기]
- 닉네임 설정 
git config --global user.name "JEONGDEOKJIN"

- 이메일 설정 
git config --global user.email "anotheryear.hm@gmail.com"

[📒 기타]
- 해당 폴더 삭제 
rm -rf .git/

- push 에 한번 문제가 생기면, pull 한번 해보고 다시 push 할 것 


```
- 출처 : [[202303070918_2주차_day02_git정리⭐⭐]]



### 2) git branch 생성 및 merge

```
- 브랜치 만들기 전 확인할 것! 
1) 브랜치를 만드는 순간, master 에 있는게 복붙되어져 옴 -> 따라서, 기존 작업물을 업데이트 해서 가져가야 하는 경우, 1️⃣ '반드시 master로 pull' 을 하고 -> 2️⃣ '브랜치를 생성' 

- 브랜치 만들기 
git branch "생성할 branch 이름"
(브랜치 만들고 push 해주기 ✅)

- 브랜치 목록 확인
git branch 
git branch -a (원격 저장소에 있는 브랜치 까지 확인)

- 생성한 브랜치로 이동 
git checkout main
git switch "이동할 브랜치 이름"
(❓ checkout 과 switch 차이점❓ : 없음. 동일함)

- 이동한 브랜치에서 뭔가를 작성 -> 스테이징 -> 커밋 -> push
(블라블라)
git add .
git commit -m "커밋 내용"
git push origin _브랜치 이름_ ⭐⭐ (빼먹지말기)


- 저장소 병합 (00에서 00을 merge)
1. main 으로 이동 (병합할 기준) (기준으로 이동해야 하는게 중요⭐⭐)
2. main 에서 commit 할 내용 확인 (commit 하려면, 뭔가를 작성해놓으면 된다.)
3. `git merge dev` 
(main 브랜치에서, dev 를 가져와서 병합하기 / main 으로 이동해 있어야 함)


- 깃헙 repository 에 push 하기 


- 생성한 브랜치 제거 
git branch -d "제거할 브랜치 이름"

- 원격 저장소에 있는 브랜치 제거 
git push origin --delete dj_dev_test

- 기타 
1. 저장이 충돌될 때, 선택하는게 있네 음. 

```
- 출처 : [[202303080905_2주차_day03_⭐수업필기_git merge, branch 설정]]

<br>
<br>

### 3) 협업 하기 

#### a) 내가 다른 팀원 작업물 받아오기 

1. 로컬에서 원격저장소랑 "동일이름" 으로 branch 생성하기 -> 그래야 pull 을 받아올 수 있음. 
```
$ git branch jhdev
$ git checkout jhdev
```

2. pull 받아오기 
```
$ git pull origin jhdev
```

<br>
<br>



#### b) 내가 브랜치 만들어보기 

1. 로컬 브랜치랑 원격 저장소 브랜치랑 확인 
``` 
$ git branch -a

빨강 : 원격 저장소
흰색 : 로컬 저장소
```
![](https://i.imgur.com/NAnNchB.png)


2. 로컬 저장소로 이동해서 -> push 날려주기 

```
$ git checkout dj_dev_test
$ git push origin dj_dev_test
```


[결과물] 
![](https://i.imgur.com/ufAFbsW.png)

<br>
<br>







#### c) 내가 만든거 지우려면 

- `git 원격 브랜치 삭제` 로 검색해서 하기 
```
git push origin --delete dj_dev_test
```







### ✅ 주의사항

1. main(master) 를 pull 해온 상태에서, branch 를 생성해야 함. 그래야 만들어진 branch 에 main 이 공유되어 있음. ⭐⭐⭐⭐⭐ 
	- 만약, pull 하지 않고, 그냥, branch 를 만들면, 텅 비어있는 곳에서 가지가 만들어짐. 
	- [요약] branch 만들 때, main 에서 pull 해온 상태에서 branch 생성해야 함. (branch 하면, 그 순간, main 의 것이 복붙! 됨) ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 



<br>



# <b> 🤟 WIL 모음 </b> 
--- 

## merge 전,후 충돌 표시


1. merge 전에, main 에서 적으면 -> 충돌 표시 남 -> 선택해주면 돼
2. merge 전에, 안 적으면 -> 충돌 표시 안남

<br>

## 10번 반복을 하면서 느끼는 것 

1. 위에 처럼 '프로세스를 요약' 해놓는다. 
2. 반복 해가면서, 어떤 말인지, 어떤 뉘앙스 인지, 내가 어떻게 적용할 수 있는지 파악해본다. 



# <b> 🤯 관련 내용 및 이론</b>  
--- 

## git 1회차 수업 


[[202303070918_2주차_day02_git정리⭐⭐#[pull 작업] pull 을 해서 깃헙 레퍼지토리에서 작업 파일 가져오기]]


- main 에서 pull 을 해온 상황임. 이때, branch 를 생성하면, 그 순간, master 의 내용이 전부 복붙 됨. (출처 : [[202303080905_2주차_day03_⭐수업필기_git merge, branch 설정#branch 를 생성하면, ==그 순간의 master 내용==이 전부 복붙 됨.]]) 

<br>

## git 2회차 수업

- ==로컬 저장소==랑  ==원격저장소==의 ==이름== 이 같아야 pull 받을 수 있음. 그래야 main 으로 push 할 수 있음. (출처 : [[202303080905_2주차_day03_⭐수업필기_git merge, branch 설정#내가 다른 거 받아오기 ⭐⭐⭐]])

<br>


 <br>
 <br>
 
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6995655056361596"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-6995655056361596"
     data-ad-slot="8096424356"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
--- 
## 참고자료 
- KGA_경일게임아카데미_블록체인과정_WEEK02_Git&Github
--- 
