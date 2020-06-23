import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import self from './self.jpg';
import sunset from './sunset.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {

  }
}));

const About = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment className={classes.container}>
      <h1 style={{textAlign: 'center'}}>
        About
      </h1>
      <img
        src={self}
        style={{maxWidth:'27%',
          maxHeight: '27%',
          objectFit: 'contain',
          float: 'left',
          padding: '2%'
        }}
        alt={'Desert Picture.'}
      />
      <p style={{textAlign: 'left', lineHeight: '2'}}>
        This site is a portfolio for various personal projects to come.
        The site itself is an ongoing software engineering project built with Dotnet Core, React and Kubernetes.
      </p>
      <p style={{textAlign: 'left', lineHeight: '2'}}>
        I'm based out of Phoenix, AZ and currently work on Machine Learning and data analytics projects professionally. I have extensive experience
        with Python, SQL, Docker, and deployment of microservices into Azure via CI/CD piplines. In my personal life, I'm really into mountain biking
        and enjoy snowboarding when I can manage to get up north.
      </p>
      <img
        src={sunset}
        style={{maxWidth:'27%',
          maxHeight: '27%',
          objectFit: 'contain',
          float: 'right',
          padding: '2%'
        }}
        alt={'Desert Picture.'}
      />
      <p style={{textAlign: 'left', lineHeight: '2'}}>
        The homepage of this site will be a blog of various personal nerd projects. 3D Printing and Raspberry Pi projects will probably be a big focus
        on here maybe with a few programming projects sprinkled in.
      </p>
    </React.Fragment>
  );
};

export default About;
