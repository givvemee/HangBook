# Hang-Book Project

<hr/>
리팩토링 및 새로운 기술을 접목하고자 꾸준히 해온 프로젝트입니다. 이전 기록이 궁금하다면 아래 토글을 열어 확인해 주세요. <br />

<br/>
<details>
    <summary><b>👉 지난 기록 확인하기 </b></summary>
    <br/>

#### ☝️ 0.2 Update

- **개요** Javascript 에서 <u>**Typescript 리팩토링**</u>
- **기간** 2022.09 ~ 2022. 09 (약 3주)

<br/>

#### 📌 SUMMARY

- **프로젝트 명** Hang-Book (Haning-Out with Books)
- **프로젝트 개요** API 를 이용하여 베스트 셀러 조회, 책 추천, 검색 기능을 구현한 웹 앱
- **기간** 2021.11 ~ 2022. 01 (약 2달)

<br/>

#### 🛠 STACKS

- **사용 기술** - **React** - `Styled-Component` - `React-Router-Dom` - **Javascript**
  <br/>

#### 🪡 KEY POINTS

- `axios` 를 이용한 api 연동
- Dark mode / Light mode 구현
- keyword query 를 이용한 검색 기능 구현
<br/>
<hr/>

#### 🖥 PREVIEW

![hangbookPreview](https://user-images.githubusercontent.com/89691274/152277807-9ecdb1ee-0918-49d3-ae48-a5270d5720a1.jpg)

</details>

#### 🎉 1.0 Release

- **개요**
- [x] `CRA` to `CNA` 마이그레이션 및 `CORS` 이슈 해결
- [x] `styled-component` to `stitches css` 마이그레이션
- [x] 기존 지역으로 관리하던 상태관리의 일부를 `zustand` 를 사용한 전역 스토어로 이동
- [x] Next 13 의 `app directory` 적용 시범
- [x] 기타 코드 개선 및 분리

<br/>

#### 📌 SUMMARY

- **프로젝트 명** Hang-Book (Haning-Out with Books)
- **프로젝트 개요** 알라딘에서 제공하는 API 를 이용하여 베스트 셀러 조회, 책 추천, 검색 기능을 구현한 웹 앱

<br/>

#### 🛠 STACKS

- **사용 기술** - `Next.js` `Stitches css` `Typescript` `Axios` `Zustand` `Vercel`
  <br/>

#### 🪡 KEY POINTS

- `app directory` 및 next13 에 적용된 `next/font`
- Dark mode / Light mode 를 stitches.config.js 내장 theme 를 이용해 리팩토링
- 순수 CRA 환경에서 고질적으로 문제를 일으켰던 CORS 이슈를 next.config.js 내 `rewrites()` 를 이용하여 해결
<br/>
<hr/>

#### 🖥 PREVIEW
<a href="https://hangbook.vercel.app/">**Click to visit preview**</a>
