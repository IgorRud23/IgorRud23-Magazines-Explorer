import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-bank/store';


import './App.css';

import Emblem from './components/Emblem';
import Header from './components/Header';
import NaviBar from './components/NaviBar';
import Home from './containers/Home';
import AddMagazine from './containers/AddMagazine';
import MagazineDetails from './components/MagDetails';
import About from './components/About';
import NotFound from './components/NotFound';
import Delete from './containers/Delete';

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
              <Route exact path='/create' component={AddMagazine}/>
              <Route exact path='/magazinedetails/:id' component={MagazineDetails}/>
              <Route exact path='/delete' component={Delete}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </Container>
      </Provider>
    </HashRouter>
  );
}

export default App;
