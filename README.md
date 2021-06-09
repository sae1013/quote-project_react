

# 프로젝트 개요

익명으로 글을 올릴 수 있는 게시판 입니다. 글을 올리고 댓글을 달아 유저들과 소통할 수 있습니다.

게시글과 댓글들은 모두 파이어베이스 실시간 데이터베이스에 저장됩니다.



# 기술스택

Front: Javascript,React,Html,CSS

Back: Firebase



# 핵심 구현기술

React - Router(SPA), customHook,lazy-loading


# 배포

1.useMemo,useCallback 을 사용하여 컴포넌트 최적화 

2.lazy-loading을 통해 유저가 방문한 경로에 맞는 컴포넌트를 우선 로딩

3.파이어베이스 호스팅을 이용하였습니다.

> https://react-httprequest.web.app/

# 동작화면

### 메인화면
<img src=https://user-images.githubusercontent.com/63229394/121372076-fba3b300-c978-11eb-941d-d7b54ab723c9.png width='70%' height='70%'>
<br>

### 게시글 정렬
<img src=https://user-images.githubusercontent.com/63229394/121372878-92706f80-c979-11eb-932d-23d841538f08.png>
<br>

### 글 작성
<img src=https://user-images.githubusercontent.com/63229394/121372147-06f6de80-c979-11eb-9660-1d81593451dc.png>
<br>

### 글 상세보기
<img src=https://user-images.githubusercontent.com/63229394/121372129-04948480-c979-11eb-9e71-76d6644de4e8.png>
<br>

### 댓글창 열기 & 댓글 달기
<img src=https://user-images.githubusercontent.com/63229394/121372108-00686700-c979-11eb-861d-21c3802d6a23.png>
