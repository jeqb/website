import React, { useState, useEffect } from 'react';
//import './App.css';

// components
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogContainer from './Components/Blog/BlogContainer';

// api calls
import api from './Data/api';

const App = () => {
  const [blogPosts, setPosts] = useState([]);


  useEffect(() => {
    api.BlogPosts.list()
      .then( response => {
        let posts = [];

        response.forEach((post) => {
          post.createdDateTime = post.createdDateTime.split('.')[0];
          posts.push(post);
        })

        setPosts(posts);
      })
  }, []);

  console.log(blogPosts);

  return (
    <React.Fragment>
      <Header/>
      <BlogContainer blogPosts={blogPosts}/>
    </React.Fragment>
  );
}

export default App;
