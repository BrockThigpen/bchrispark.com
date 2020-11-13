import { AppBar, makeStyles } from '@material-ui/core';
import React from 'react';

function TopBar(props) {
  const useStyles = makeStyles((theme) => {
    return {
      root: {
        background: 'green',
        height: '64px',
        width: '100vw',
        zIndex: theme.zIndex.drawer + 1,
      },
    };
  });

  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        Welcome to bchrispark.com
      </AppBar>
    </>
  );
}

export default TopBar;
