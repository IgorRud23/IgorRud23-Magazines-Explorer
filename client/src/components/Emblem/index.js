import React from 'react';
import Typography from '@material-ui/core/Typography';
import logo from './magazine.svg';


const Emblem = () => {
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo'/>

      <Typography align='center' ><b>magazines is a book about life arround us</b></Typography>

    </div>
  )
};

export default Emblem;
