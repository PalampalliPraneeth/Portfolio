import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, LinkedIn, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'grey',
    borderRadius: '4%',
    position: 'fixed',
    top: '50%',
    left: theme.spacing(2),
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
  },
}));

const SocialMediaIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="https://www.linkedin.com/in/praneethpalampalli/" target="_blank" rel="noopener noreferrer">
        <LinkedIn className={classes.icon} />
      </a>
      <a href="https://www.facebook.com/praneethkumarreddy.09?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <Facebook className={classes.icon} />
      </a>
      <a href="https://www.instagram.com/praneeth_ppkr" target="_blank" rel="noopener noreferrer">
        <Instagram className={classes.icon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
