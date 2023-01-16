# Tasks 관리 앱

## 프로젝트 설명

- nextJS와 mongoDB를 사용하여 풀스택으로 구현한 todoList입니다.
- 간단한 가입과 로그인을 통하여, 하고자 하는 작업(task)을 아이콘,마감 기한,중요도 및 기타 옵션 등을 설정하여 생성할수있고, 변경할 수 있습니다.
- PC 환경과 모바일 환경을 고려한 반응형 디자인으로 구현하였습니다.

## 구현 설명

- nextJS의 api를 사용한 풀스택으로 구현하였습니다.
- nextAuth를 이용한 미들웨어를 사용하였고, credentail 계정 및 google,github을 사용하는 oAuth를 구현하였습니다.
- tailwind를 사용하여 반응형 화면을 제작하였습니다.
- recoil을 사용하여 다른 컴포넌트간의 값을 쉽게 가져와 사용할 수 있도록 하였습니다.
- 작업을 생성 및 수정시 아이콘 이름을 저장하여, List 화면에서 아이콘과 함께 볼 수 있도록 하였습니다.
- formik와 yup을 사용하여 form값을 check하고, 제한된 값을 넘을시 에러 메시지를 표시하도록 하였습니다.
- features 폴더에서 각 구현기능에 맞는 파일들을 보관하도록 하였습니다.

## 사용 스택 :

- NextJS
- TypeScript
- ReactQuery
- Recoil
- TailwindCSS
- Twin.macro
- formik
- yup
- MongoDB

## commit msg 규칙

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor : 코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성
