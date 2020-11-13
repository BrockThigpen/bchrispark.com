import React from 'react';
import {
  Drawer,
  makeStyles,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { PATHS } from '../../paths';
import { useHistory } from 'react-router';
const drawerWidth = 200;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: 'green',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
  },
}));

export default function SideBar() {
  const history = useHistory();
  const menuItems = [
    {
      label: 'Home',
      clickHandler: () => {
        history.push(PATHS.home);
      },
    },
    {
      label: 'Resume',
      clickHandler: () => {
        history.push(PATHS.resume);
      },
    },
    {
      label: 'Portfolio',
      clickHandler: () => {
        history.push(PATHS.portfolio);
      },
    },
  ];

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {menuItems.map(({ label, clickHandler }) => (
            <ListItem button key={label} onClick={clickHandler}>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
