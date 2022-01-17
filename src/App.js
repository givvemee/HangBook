import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import BestSellerMain from './components/main/bestSellers/BestSellerMain';
import Today from './components/main/Today/Today'
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
  const LocalTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState(LocalTheme) || 'light'; 
  const theme = themeMode === 'light' ? lightMode : darkMode; 
  const toggleTheme = useCallback(() => {
    if (themeMode === "light") {
      setThemeMode("dark");
      window.localStorage.setItem('theme', 'dark');
    }
    else {
      setThemeMode("light")
      window.localStorage.setItem('theme', 'light');
    };
  }, [themeMode]);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBack>
          <ThemeChange title={theme === lightMode ? '🌚' : '🌝'} clickToModeChange={toggleTheme}/>
          <HashRouter>
            <FullWrap>
              <Header />
              <div>  
                <Switch>
                  <Route path="/" component={Today} exact />
                  <Route path="/bestSellers" component={BestSellerMain} />
                  <Route path="/searchBooks" component={SearchBookMain} />
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