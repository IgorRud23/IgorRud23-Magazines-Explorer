import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addItemToList} from '../../redux-bank/actions/list';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class AddMagazine extends Component {

  constructor(props) {
      super(props)
      this.state = {
        name: '',
        image_src: '',
        discription: '',
        release_date: '',
      };
    };

    updateState = (key) => (e) => this.setState({ [key]: e.target.value })

    handleSave = () => {
      // name, :image_src, :discription, :release_date)
      const options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'omit',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };


    fetch('http://localhost:3000/api/magazines/create', options)
      .then(res => res.json())
      .then(newBook => {
        //dispatch(addItemToList(newBook));
        console.log(newBook);
        //setState(initState);
        alert('Successfully created!');
      }).catch(console.error);
    };

  render() {
    return (

      <main>
      <Typography variant='h4' color='primary'>Put Book on List</Typography>

      <form noValidate autoComplete='off' className="App-column-center">
        <TextField onChange={this.updateState('name')} value={this.state.name} label='name' margin='normal' placeholder='magazine name'/>
        <TextField onChange={this.updateState('image_src')} value={this.state.image_src} label='image src' margin='normal' placeholder='paste url here'/>
        <TextField onChange={this.updateState('discription')} value={this.state.discription} label='discription' margin='normal' placeholder='short discription'/>
        <TextField onChange={this.updateState('release_date')} value={this.state.release_date} label='release date' margin='normal' placeholder='year'/>

        <Button color='primary' variant='contained' onClick={this.handleSave}>Create</Button>
      </form>
    </main>

    )
  }
};

const mapDispatchToProps = () => {
  return
};

export default connect(null, mapDispatchToProps)(AddMagazine);
