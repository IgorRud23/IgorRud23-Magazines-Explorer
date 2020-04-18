import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {getListOfMagazines} from '../../redux-bank/actions/list'

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Home extends Component {

  render() {
    return (
      <section>

    <Typography variant='h4' color='primary'>Books List</Typography>


  </section>
    )
  }
}

export default Home;
