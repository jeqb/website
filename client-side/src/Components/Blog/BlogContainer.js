import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// components
import BlogPost from '../Blog/BlogPost';


const BlogContainer = ({
  blogPosts
}) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <BlogPost
          title="This is my title"
          CreatedDateTime="DateTime"
          body="Body"
        />
      </Container>
    </React.Fragment>
  );
};

export default BlogContainer;
