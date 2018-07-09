# study_webpack
study_webpack
## webpack version 
    4.14 

## 목표

- es6 as babel 
    - 완료
- typescript 
- css 및 기타 파일들 번들링 
    - css 완료
    - dist 디렉토리에 css 파일 분리하기 완료
    - 기타 파일 번들링 추가 완료
    - url loader
- 코드 스플리팅
- 개발환경 구축 
- 배포환경 구축
- build 시 기존 dist 폴더 삭제 완료
- 번들링 시킨 파일을 index.html에 삽입 시키기 
- provider 설정
    - webpack.ProvidePlugin을 통해 등록된 모듈을 자유 변수로 사용이 가능

## npm install 
```bash 
# webpack install 
npm i -D webpack webpack-cli
# babel install 
npm i -D babel-loader babel-core babel-preset-env
# css 및 기타 파일들 번들링
npm i -D style-loader css-loader extract-text-webpack-plugin@next
npm i -D file-loader url-loader
# node_modules 모듈 빌드 과정 제외
npm install webpack-node-externals --save-dev
# 
npm i -D html-webpack-plugin@latest
# 번들링시 dist 디렉토리 삭제
npm i -D clean-webpack-plugin
```
