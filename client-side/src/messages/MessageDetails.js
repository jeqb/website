import React, { useContext, useEffect }  from 'react';

// components
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import LoadingComp from '../layout/LoadingComponent';

// data
import { observer } from 'mobx-react-lite';
import MessageStore from '../store/messageStore';

// styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' 
  },
  attribute: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  item: {
    margin: '2%',
    whitespace: 'nowrap' 
  }
});

const MessageDetails = ({
  message
}) => {
  const classes = useStyles();
  const messageStore = useContext(MessageStore);

  return (
    <Container className={classes.root} maxWidth="md">
      <h1>Message Details</h1>
      <Card className={classes.card}>
        <div className={classes.attribute}>
          <div className={classes.item}>
            From:
          </div>
          <div className={classes.item}>
            {message.name}
          </div>
        </div>
        <div className={classes.attribute}>
          <div className={classes.item}>
            Email:
          </div>
          <div className={classes.item}>
            {message.email}
          </div>
        </div>
        <div>
          message:
        </div>
        <div >
          {message.messageContent}
        </div>
      </Card>
    </Container>
  );
};

export default observer(MessageDetails);
