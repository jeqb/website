import React from 'react';

// components
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingComp = () => {
  return (
    <React.Fragment>
    <Container maxWidth="md" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <CircularProgress style={{margin: '40%'}}/>
    </Container>
    </React.Fragment>
    );
}

export default LoadingComp;
