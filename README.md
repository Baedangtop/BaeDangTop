# 프로젝트 배당탑

## 사용 프레임워크 및 라이브러리

- 프레임워크: react
- 번들러: webpack
- 컴파일: babel-loader, ts-loader -> babel에서 swc로 마이그레이션 swc-loader 사용
- 언어: typescript
- 패키지 관리 툴: yarn
- 스타일: styled-compoents
- 상태관리: redux

## 폴더 구조

- public: index.html, 각종 웹사이트 정보(favicon 등)
- src: code

### src

- pages: 실제 페이지
- assets/image: 이미지
- assets/api: api 통신 코드
- components: 컴포넌트
- App.js: 라우터
- model: 웹사이트 내용
- util: type, interface
- test: test code

## webpack 번들 방식

### entry

1. main과 react-vendors 두개로 vendors 파일 따로 분리
2. 실제 동작 코드인 main인 경우 경로 ./src/index.tsx, 런타임 관련 코드는 런타임 청크로 따로 구분

### output

1. 컴파일시 번들 파일 이름은 "[name].bundle.[contenthash].js"다음과 같은 형태
2. chunkLoadTimeout를 통한 캐싱
3. 사진과 같은 파일은 "assets/[contenthash][ext]"로 따로 분리
4. 빌드시 기존 번들 파일 삭제
5. 경로는 dist폴더

### module

#### rules

1. js, jsx는 babel-loader로 컴파일 이때 typescript라면 ts-loader를 거침

### plugin

1. HtmlWebpackPlugin으로 템플릿 지정, public 디렉토리에 index.html
2. ForkTsCheckerWebpackPlugin을 통한 typescript 빠른 빌드

## 규칙

- classname: BEM
