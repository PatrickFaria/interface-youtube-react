import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    },
    appBar: {
        boxShadow: 'none'
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
        </div>
    )
}

export default Home;