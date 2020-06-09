import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const About = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment className={classes.container}>
      <h1>
        Nothing to see here on the about page just yet.
      </h1>
    </React.Fragment>
  );
};

export default About;
