import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import BestSellerMain from './components/main/bestSellers/BestSellerMain';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Today from './components/main/Today(test)/Today'
import SearchBookMain from './components/main/searchBooks/SearchBookMain';
import '../src/components/common/reset.css'
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from './components/common/theme';
import ThemeChange from './components/common/ThemeChange';

const MainBack = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const FullWrap = styled.div`
  width: 70vw;
  height: 80vh;
  padding: 90px 50px;
  font-family: 'Montserrat';
  border-radius: 20px;
  display: grid;
  grid-template-columns: .3fr .7fr;
  background: ${props => props.theme.rightBg};
  & > div {
    overflow-x: hidden;
  }
`
const App = () => {
  const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
    const theme = themeMode === 'light' ? lightMode : darkMode; // 테마 환경에 맞는 테마 컬러 가져오기.

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBack>
          <ThemeChange title={theme === lightMode ? '🌙' : '☀️'} clickToModeChange={toggleTheme}/>
          <HashRouter>
            <FullWrap>
              <Header />
                {/* <Nav /> */}
              <div>  
                <Switch>
                  <Route path="/" component={Main} exact={true} />
                  <Route path="/bestSellers" component={BestSellerMain} />
                  <Route path="/searchBooks" component={SearchBookMain} />
                  <Route path="/todays" component={Today} />
                </Switch>
              </div>
            </FullWrap>
          </HashRouter>
        </MainBack>
      </ThemeProvider>
  </>
  );
};

export default App;