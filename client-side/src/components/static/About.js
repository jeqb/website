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
      <h1 style={{textAlign: 'center'}}>
        About
      </h1>
      <p style={{textAlign: 'center'}}>
        This site is a portfolio for various personal projects to come.
      </p>
      <p style={{textAlign: 'center'}}>
        The site itself is an ongoing software engineering project built with Dotnet Core and React.
      </p>
      <p style={{textAlign: 'center'}}>
        More to come in the future.
      </p>
    </React.Fragment>
  );
};

export default About;
