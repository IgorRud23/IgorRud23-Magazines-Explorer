import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteItemFromList} from '../../redux-bank/actions/list';
import {getListOfMagazines} from '../../redux-bank/actions/list';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


class Delete extends Component {

componentDidMount() {
  this.props.dispatch(getListOfMagazines())
};

handleOpenItem = (magazineID) => () => {

  this.props.history.push(`/magazinedetails/${magazineID}`);
};

handleDelete = (magazineID) => () => {
console.log(magazineID)
this.props.dispatch(deleteItemFromList(magazineID));

const options = {
  method: 'POST',
  body: JSON.stringify({id: magazineID}),
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json'
  },
};
  fetch('http://localhost:3000/api/magazines/delete', options).catch(console.error);
};

  render() {
    return(
      <section>

        <Typography variant='h4' color='primary' align='center'>Magazines List</Typography>

          <List className="App-column-center">
              {this.props.data.map((magazine, index) => (
                <ListItem>
                  <Typography>{index + 1}: {magazine.name}</Typography>
                  <ListItemSecondaryAction>
                  <Button onClick={this.handleDelete(magazine.id)} variant='contained' color='primary'>delete</Button>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>

      </section>
    )
  };

};

function mapStateToProps(state) {
  return(
    state.list
  )
};

export default connect(mapStateToProps, null)(Delete);
