import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {getListOfMagazines} from '../../redux-bank/actions/list';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class MagazineDetails extends Component {

  componentDidMount(){
    console.log('Igor, next will be display this props')
    console.log(this.props)
    console.log(this.props.match.params.id)
    this.props.dispatch(getListOfMagazines())
      };

    render() {

      const list = this.props.data
      const idishka = this.props.match.params.id
      const maga = list.filter((element) => element.id === Number(idishka));
      const magazine = maga[0]
      if (!magazine) {
        return <h1>loading</h1>
      }
      return (
        <section>
          <Typography align='center' variant='h6' color='primary' gutterBottom>MAGAZINE INFO</Typography>
            <br/>
              <Paper elevation={7} className='App-column-center'>

                <Typography gutterBottom><b>{magazine.name}</b></Typography>
                <img src={magazine.image_src} alt='Image of event' />
                <Typography paragraph>{magazine.discription}</Typography>
                <Typography gutterBottom>Release date: {magazine.release_date}</Typography>

              </Paper>
        </section >
  )
    };

};

function mapStateToProps(state) {
  return(
    state.list

  )
};

export default connect(mapStateToProps, null)(MagazineDetails);
