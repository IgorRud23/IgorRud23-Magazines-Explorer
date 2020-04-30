import React from 'react';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Typography style={{whiteSpace: 'pre-line'}}>
    {`
       This is an app where parents can read about kids magazines.
       What will help you to pick the right one magazine for your kids, an app where you can share
       with other parents what your kids love to read so instead of buying a bunch of random magazines,
       spend a tone of money and then just throw them to the fireplace,
       you will pick the right one which will fit your kid's interests and they gonna like it.
    `}
    </Typography>
  )
};

export default About;
