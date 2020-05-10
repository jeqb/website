import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  Name,
  Email,
  MessageContent,
  MessageDate
}) => {
  const classes = useStyles();


  // condence strings in the event that they are too long to display
  var nameSlice = shortenString(Name);
  var emailSlice = shortenString(Email);
  var messageSlice = shortenString(MessageContent);


  return(
    <Card className={classes.root}>
      <CardActionArea className={classes.CardActionArea}>
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
            {MessageDate}
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default MessagePreview;
