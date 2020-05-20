import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


const shortenString = (s) => {
  if (s.length > 20) {
    var newString = s.slice(0, 20) + ' ...'
    return newString
  } else {
    return s
  }
};


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    variant:"outlined",
    margin: "2%",
  },
  CardActionArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: "center",
    textAlign: "center",
  },
  messageItem: {
    margin: '1%',
    flexBasis: '100%'
  },
  label: {
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});


const MessagePreview = ({
  id,
  name,
  email,
  messageContent,
  messageDate,
  onClickHandler,
}) => {
  const classes = useStyles();

  // condence strings in the event that they are too long to display
  var nameSlice = shortenString(name);
  var emailSlice = shortenString(email);
  var messageSlice = shortenString(messageContent);

  return(
    <Card className={classes.root} >
      {/*<CardActionArea className={classes.CardActionArea} onClick={()=> onClickHandler(id)}>*/}
      <CardActionArea className={classes.CardActionArea} component={Link} to={`/messages/${id}`}>
          <div className={classes.messageItem}>
            <div className={classes.label}>
              Name
            </div>
            <div className={classes.data}>
              {nameSlice}
            </div>
          </div>
          <div className={classes.messageItem}>
            <div className={classes.label}>
              Email
            </div>
            <div className={classes.data}>
              {emailSlice}
            </div>
          </div>
          <div className={classes.messageItem}>
            <div className={classes.label}>
            MessageContent
            </div>
            <div className={classes.data}>
              {messageSlice}
            </div>
          </div>
          <div className={classes.messageItem}>
            <div className={classes.label}>
              MessageDate
            </div>
            <div className={classes.data}>
              {messageDate}
            </div>
          </div>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(MessagePreview);
