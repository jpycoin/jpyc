import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import index from './components/index';
import buy from './components/buy';
import bank from './components/bank';
import Use from './components/Use';
// import Individual from './components/Individual';
import company from './components/company';
import privacyPolicy from './components/privacy-policy';
import law from './components/law';
import buyFromETH from './components/buyFromETH';
import shikin_kessai from './components/shikin_kessai';
import member from './components/member';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={index} />
              <Route exact path='/buy' component={buy} />
              <Route exact path='/bank' component={bank} />
              <Route exact path='/Use' component={Use} />
              <Route exact path='/company' component={company} />
              <Route exact path='/shikin_kessai' component={shikin_kessai} />
              <Route exact path='/law' component={law} />
              <Route exact path='/privacy-policy' component={privacyPolicy} />
              <Route exact path='/buyFromEth' component={buyFromETH} />
              <Route exact path='/member' component={member} />
              {/* <Route exact path='/individual' component={Individual} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
