import React from 'react';

import { Container, Typography } from '@material-ui/core';

const MessageSubmitted = () => {

  return (
    <Container>
      <Typography align="center" variant="h2">
        Thank you for your message.
      </Typography>
      <Typography align="center" variant="h2">
        The admin will reach out to you shortly.     
      </Typography>
    </Container>
  )
};

export default MessageSubmitted;
