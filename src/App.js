import React from 'react';

import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './component/Order/Order';
import Manage from './component/Manage/Manage';
import Details from './component/Details/Details';
import Notfound from './component/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>
          <Route path="/order">
              <Order></Order>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="/product/:detaileskey">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
              <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
