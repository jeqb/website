import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),

  },
  title: {
    flexGrow: 1,
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
        <Tooltip title="Home">
          <IconButton className={classes.icon} color="inherit" aria-label="menu">
              <HomeIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="About">
            <IconButton className={classes.icon} color="inherit" aria-label="menu">
              <AccountBoxIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact">
            <IconButton className={classes.icon} color="inherit" aria-label="menu">
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton className={classes.icon} color="inherit" aria-label="menu">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton className={classes.icon} color="inherit" aria-label="menu">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};


export default Header;
