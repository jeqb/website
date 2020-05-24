import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UnderConstruction from './UnderConstruction.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%'
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src={UnderConstruction}
        style={{maxWidth:'40%',
          maxHeight: '40%',
          objectFit: 'contain'
        }}
        alt={'This page is under construction.'}
      />
    </div>
  );
};

export default Home
