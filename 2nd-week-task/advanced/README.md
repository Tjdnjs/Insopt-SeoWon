# 5개의 라우팅 경로 구성하기

- [/api/user](#user)

- [/api/blog](#blog)

- [/api/comment](#comment)

- [/api/movie](#movie)

- [/api/members](#member)

## 도전과제

### /
<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080033-b0dfad0c-2304-49d9-9f1c-3ee08c4a33e2.png">

이제 아래 페이지들에 동작도 안 하는 (read 말고는 처리가 귀찮아서 안 만듦) 비루한 html을 넣어보았는데 ,,, 정적 파일연결 / 동적 html 사용을 해보고 싶었달까요 ^_^ 가운데에 뜨는 파일 이름을 어떻게 할까 하다가 아래 코드로 처리 완료 ~사실 라우팅 경로도 동적으로 만들고 싶었는데 replace 또 쓰기 귀찮아서 타이핑 했습니다~

```typescript
__filename.replace(__dirname+'/', '')
```
## User

<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080171-ce0ae9a3-89ba-4897-8155-dd2cff1becb0.png">

### /api/user

<img width="884" alt="image" src="https://user-images.githubusercontent.com/91242806/194763039-1220dadf-fe88-4a60-862f-1bc393f5458e.png">

## Blog

<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080120-3ea5c500-ae7a-4c07-ba10-8137721ba79d.png">

### /api/blog/read

<img width="884" alt="image" src="https://user-images.githubusercontent.com/91242806/194762988-83bd126a-7ded-4efe-927e-16185bc2118d.png">

### /api/blog/create


<img width="770" alt="image" src="https://user-images.githubusercontent.com/91242806/194853456-bc94111c-8e7c-472d-b5cd-5012be1932fe.png">



## Comment

<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080232-c48049d8-9511-485e-bd83-603bd55adc3d.png">


### /api/comment/read

<img width="884" alt="image" src="https://user-images.githubusercontent.com/91242806/194763014-68e24cbe-0dde-4cc0-8c2b-09e344ab9414.png">

### /api/comment/create

- 존재하는 게시글에 댓글을 작성한 경우 : post 생성 후 /read 페이지로 redirect<br><br><img width="923" alt="image" src="https://user-images.githubusercontent.com/91242806/195074142-a1757365-d7aa-4131-9bc8-2c39f2611520.png">

- 존재하지 않는 게시물에 댓글 작성을 시도한 경우 <br><br><img width="923" alt="image" src="https://user-images.githubusercontent.com/91242806/195078861-6d48ba55-5b09-4bc6-bdf7-baeed1690fa5.png">

## Movie

<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080357-7a33a323-ae19-4e1a-a375-99a5fe4198e7.png">


### /api/movie

<img width="884" alt="image" src="https://user-images.githubusercontent.com/91242806/194763028-29c75cb4-8790-4f34-af4a-5c954be87038.png">

## Member

<img width="846" alt="image" src="https://user-images.githubusercontent.com/91242806/195080306-2ea3e7b7-442a-4606-bd52-5d5ac6bb7cb6.png">

### /api/members

<img width="884" alt="image" src="https://user-images.githubusercontent.com/91242806/194762967-8225fda1-59d8-40d6-b8c8-523b5494d346.png">

