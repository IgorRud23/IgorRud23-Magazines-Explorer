import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-bank/store';

import './App.css';

import Emblem from './components/Emblem';
import Header from './components/Header';
import NaviBar from './components/NaviBar';
import MagazineDetails from './components/MagDetails';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import Delete from './containers/Delete';
import About from './components/About';
import AddMagazine from './containers/AddMagazine';
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
            <br/>

            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/create' component={AddMagazine}/>
              <Route exact path='/magazinedetails/:id' component={MagazineDetails}/>
              <Route exact path='/delete' component={Delete}/>
              <Route exact path='/about' component={About}/>
              <Route component={NotFound}/>
            </Switch>

            <Footer/>
          </div>
        </Container>
      </Provider>
   </HashRouter>
  );
};

export default App;
