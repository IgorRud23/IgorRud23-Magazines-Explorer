import React from 'react';
import Typography from '@material-ui/core/Typography';
import logo from './magazine.svg';


const Emblem = () => {
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo'/>

      <Typography align='center'><b>-The See and Do, Laugh and Learn-</b></Typography>

    </div>
  )
};

export default Emblem;
