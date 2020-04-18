import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-bank/store';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={() => <h1>HomePage</h1>}/>
            <Route exact path='/create' component={() => <h1>CreateMagazine</h1>}/>
            <Route exact path='/magazinedetails/:id' component={() => <h1>MagazineDetails</h1>}/>
            <Route exact path='/delete' component={() => <h1>DeleteMagazine</h1>}/>
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
