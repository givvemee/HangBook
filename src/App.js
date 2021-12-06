import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import BestSellerMain from './components/main/bestSellers/BestSellerMain';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Today from './components/main/Today(test)/Today'
import SearchBookMain from './components/main/searchBooks/SearchBookMain';
// import SearchBookMain from './components/main/searchBooks/SearchBookMain';
import '../src/components/common/reset.css'
import styled from 'styled-components';

const FullWrap = styled.div`
  
`
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <FullWrap>
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
  </>
  );
};

export default App;