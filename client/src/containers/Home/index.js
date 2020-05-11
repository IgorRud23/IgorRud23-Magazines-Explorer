import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getListOfMagazines} from '../../redux-bank/actions/list'

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getListOfMagazines())
  };

  handleOpenItem = (magazineID) => () => {
    this.props.history.push(`/magazinedetails/${magazineID}`);
  };

  render() {

    return (
      <section>

        <Typography variant='h4' color='primary' align='left'>Magazines List</Typography>

          <List className="App-column-center" >
              {this.props.data.map((magazine, index) => (
                <ListItem key={magazine.id} button onClick={this.handleOpenItem(magazine.id)} divider>
                  <Typography> {index + 1}: {magazine.name}</Typography>
                </ListItem>
              ))}
          </List>

      </section>
    )
  }
};

function mapStateToProps(state) {
  return(
    state.list
  )
};

export default connect(mapStateToProps, null)(Home);
