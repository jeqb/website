import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    variant:"outlined",
    margin: "2%",
    alignContent: "center",
    textAlign: "center",
  },
  title: {
    
  },
});


const BlogPost = ({
  id,
  title,
  CreatedDateTime,
  body,
  handleSelectBlogPost
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=> handleSelectBlogPost(id)}>
        <h1>
          {title}
        </h1>
        <h4>
        {CreatedDateTime}
        </h4>
        <CardContent>
        {body}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogPost
