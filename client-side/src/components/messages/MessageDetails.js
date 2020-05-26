import React, { useContext, useEffect }  from 'react';
import { withRouter } from 'react-router-dom';

// components
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import LoadingCompnent from '../layout/LoadingComponent';

// data
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../store/rootStore';

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
  match,
  history
}) => {
  // DEBUG
  console.log('MessageDetails: rendered')

  const classes = useStyles();
  const rootStore = useContext(RootStoreContext);
  const { loadMessage, activeMessage, messageRegistry, loading } = rootStore.messageStore

  // DEBUG
  console.log(`MessageDetails: the active message is: ${activeMessage}`)
  console.log(`MessageDetails: the loading variable is : ${loading}`)
  console.log(`MessageDetails: the registry keys are: ${Array.from(messageRegistry.keys())}`)


  useEffect(() => {
    // DEBUG
    console.log('MessageDetails: running useEffect')

    loadMessage(match.params.id);
  }, [loadMessage]);

  /*
  if (messageStore.loading) {
    // DEBUG
    console.log('MessageDetails: loading component triggered by loading variable')
    console.log(`MessageDetails: loading value is ${messageStore.loading}`)
    return <LoadingCompnent/>
  }
  */

  if (activeMessage === undefined) {
    // DEBUG
    console.log('MessageDetails: loading component triggered by loading variable')
    console.log(`MessageDetails: loading value is ${activeMessage}`)
    return <LoadingCompnent/>
  }


  return (
    <Container className={classes.root} maxWidth="md">
      <h1>Message Details</h1>
      <Card className={classes.card}>
        <div className={classes.attribute}>
          <div className={classes.item}>
            From:
          </div>
          <div className={classes.item}>
            {activeMessage.name}
          </div>
        </div>
        <div className={classes.attribute}>
          <div className={classes.item}>
            Email:
          </div>
          <div className={classes.item}>
            {activeMessage.email}
          </div>
        </div>
        <div>
          message:
        </div>
        <div >
          {activeMessage.messageContent}
        </div>
      </Card>
    </Container>
  );
};

export default withRouter(observer(MessageDetails));
