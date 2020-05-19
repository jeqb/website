import React from 'react';

import BlogPost from './BlogPost';

const BlogPostList = ({
  blogPosts,
  handleSelectBlogPost
}) => {

  return (
    <div>
      {
        blogPosts.map( (post) => {
          return(
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              CreatedDateTime={post.createdDateTime}
              body={post.body}
              handleSelectBlogPost={handleSelectBlogPost}
            />
          )
        })
      }
    </div>
  )
};

export default BlogPostList;
