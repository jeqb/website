import React, { useState, useEffect, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// components
import BlogPost from '../Blog/BlogPost';
import { observer } from 'mobx-react-lite';

// data
import BlogPostCache from '../../Data/postCache';

const BlogContainer = () => {
  const postCache = useContext(BlogPostCache)
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {
          postCache.blogPosts.map( (post) => {
            return(
              <BlogPost
                key={post.id}
                title={post.title}
                CreatedDateTime={post.createdDateTime}
                body={post.body}
              />
            )
          })
        }
      </Container>
    </React.Fragment>
  );
};

export default observer(BlogContainer);
