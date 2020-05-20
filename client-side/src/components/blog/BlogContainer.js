import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// components
import BlogPostList from './BlogPostList';

const BlogContainer = ({
  blogPosts,
  handleSelectBlogPost
}) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <BlogPostList
          blogPosts={blogPosts}
          handleSelectBlogPost={handleSelectBlogPost}
        />
      </Container>
    </React.Fragment>
  );
};

export default BlogContainer
