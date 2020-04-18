import React from 'react';
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Navi = (props) => {
  const currentPath = props.location.pathname;

  const handleClick = path => () => {
    props.history.push(path);
    console.clear();
    console.log(props)
  };

  return(
    <ButtonGroup size='large' color='primary'>
      <Button disabled={currentPath==='/'} onClick={handleClick('/')}>Home</Button>
      <Button disabled={currentPath==='/create'} onClick={handleClick('/create')}>Add a new Magazine</Button>
      <Button disabled={currentPath==='/delete'} onClick={handleClick('/delete')}>Delete Magazine</Button>
      <Button disabled={currentPath==='/about'} onClick={handleClick('/about')}>About</Button>
    </ButtonGroup>
  )
};


export default withRouter(Navi);
