import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import BestSellerMain from './components/main/bestSellers/BestSellerMain';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    // <>
    //   <Router>
    //     <Nav />
    //     <Switch>
    //       <Route path="/" component={Main} />
    //       <Route path="/bestSellers" component={BestSellerMain} />
    //     </Switch>
    //   </Router>
    // </>
    <>
    <Header />
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/bestSellers" component={BestSellerMain} />
      </Switch>
    </Router>
  </>
  );
};

export default App;