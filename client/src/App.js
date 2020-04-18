import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-bank/store';


import './App.css';

import Emblem from './components/Emblem';
import Header from './components/Header';
import NaviBar from './components/NaviBar';
import Home from './containers/Home';

import Container from '@material-ui/core/Container';


function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Container maxWidth='xl'>
          <div className="App">
            <Emblem/>
            <Header/>
            <NaviBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/create' component={() => <h1>CreateMagazine</h1>}/>
              <Route exact path='/magazinedetails/:id' component={() => <h1>MagazineDetails</h1>}/>
              <Route exact path='/delete' component={() => <h1>DeleteMagazine</h1>}/>
              <Route exact path='/about' component={() => <h1>About</h1>}/>
            </Switch>
          </div>
        </Container>
      </Provider>
    </HashRouter>
  );
}

export default App;
