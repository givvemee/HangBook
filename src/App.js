import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import BestSellerMain from './components/main/bestSellers/BestSellerMain';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Today from './components/main/Today(test)/Today'
import SearchBookMain from './components/main/searchBooks/SearchBookMain';
import '../src/components/common/reset.css'
import styled from 'styled-components';

const MainBack = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e6e9f1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FullWrap = styled.div`
  width: 70%;
  height: 80vh;
  padding: 90px 50px;
  font-family: 'Montserrat';
  border-radius: 20px;
  display: grid;
  grid-template-columns: .3fr .7fr;
  overflow: hidden;
  background: #f4f4f6;
  & > div {
    /* border: 1px solid red; */
    overflow-x: auto;
  }
`
const App = () => {
  return (
    <>
      <MainBack>
        <Router>
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
        </Router>
      </MainBack>
  </>
  );
};

export default App;