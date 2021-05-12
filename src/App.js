import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// ページコンポーネントのインポート
import index from './components/index';
import company from './components/company';
import privacyPolicy from './components/privacy-policy';
import law from './components/law';
import shikin_kessai from './components/shikin_kessai';
import member from './components/member';

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={index} />
              <Route exact path='/company' component={company} />
              <Route exact path='/shikin_kessai' component={shikin_kessai} />
              <Route exact path='/law' component={law} />
              <Route exact path='/privacy-policy' component={privacyPolicy} />
              <Route exact path='/member' component={member} />
              <Route exact path='/Use' render={() => (window.location = "https://app.jpyc.jp/purchase")} />
              <Route exact path='/buy' render={() => (window.location = "https://app.jpyc.jp/buy")} />
              <Route exact path="/grant" render={() => (window.location = "https://jpycgrant.studio.site")} />
              <Route exact component={index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
