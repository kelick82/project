# README

규칙을 맞춰주시려면, app-carrier, app-client 처럼 만들어주시면 됩니다.
그 안에서는 어떤거든 workspace하고는 거의 무관하게 동작할 겁니다.
기존 VUE 프로젝트하고 admin하고 통합하기 전까진 root단에 package설치는 자제 부탁드립니다.
app-admin 내에서 prettier, eslint, eslint-vue 통합된 것 까지 확인하였습니다.

IDE 종속된 외부 PLUGIN은 설치 없습니다. (volar 제외)

## 공통사항
- YARN 필수 사용. (npm에는 nohoist 명령어가 없습니다.)

## 모듈 추가시
- 최상단 package.json > packages에 폴더명 추가하셔야 합니다.

## workspace 명령어
### 예시. app-admin에 패키지 추가
yarn workspace app-admin add [패키지 이름]
(모노레포 안에 있는 패키지도 마찬가지입니다.)

## 기타
### yarnrc.yml
노터치