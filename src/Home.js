import { AppBar, Button, IconButton, makeStyles, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider }
 from '@material-ui/core';
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        borderRight: 'none',
      },
    grow: {
        flexGrow: 1
    },
    icons:{
        paddingRight: theme.spacing(5)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    logo: {
        height: 25
    }
  }))

function Home (){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <img src="/image/preto.png" alt="logo" className={classes.logo}/>
                <div className={classes.grow}/>
                <IconButton className={classes.icons} color="inherit">
                <VideoCall />
                </IconButton>
                <IconButton className={classes.icons} color="inherit">
                <AppsIcon />
                </IconButton>
                <IconButton className={classes.icons} color="inherit">
                <MoreVert />
                </IconButton>
                <Button startIcon={<AccountCircle/>} variant="outlined" color="secondary">Fazer Login</Button>
            </Toolbar>
            </AppBar>
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
        </div>
    )
}

export default Home;