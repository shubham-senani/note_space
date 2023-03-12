import React from 'react'
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
const drawerWidth = 240
const useStyles = makeStyles((theme)=>{
    return {
        page: {
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
            },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            background: "#f9f9f9",
            display: "flex"
        },
        active: {
            background: "#f4f4f4"
        },
        typo:{
            color: "black",
            flexGrow: 1
        },
        avatar:{
            marginLeft: theme.spacing(1)
        },
        name: {
            color: "black",
            fontSize: theme.spacing(2),
            background: "#fefefe"
        },
        title: {
            padding: theme.spacing(3)
        },
        toolbar: theme.mixins.toolbar
    }
});

const App = styled(AppBar)`
width: calc(100% - 240px);
background: white;
`
export default function Layout({ children }) {
    const classes = useStyles();
    const date = new Date()
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: "Notes",
            icon: <SubjectOutlined color='primary'/>,
            path: "/"
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineOutlined color='primary'/>,
            path: "/create"
        }
    ]
    return (
        <div className={classes.root}>
            <App elevation={0}>
                <Toolbar>
                <Typography className={classes.typo}>
                    {date.toDateString()}
                </Typography>
                <Typography className={classes.name} >
                    Skipper Senani
                </Typography>
                <Avatar
                className={classes.avatar}
                src='/images.jpg'
                />
                </Toolbar>
            </App>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Space_Notes
                    </Typography>
                </div>

                {/* List Items */}
                <List>
                    {menuItems.map((item)=>
                    <ListItem 
                    
                    key={item.text}
                    onClick = {()=>{history.push(item.path)}}
                    className = {location.pathname === item.path?classes.active:null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                         primary={item.text}
                        />
                    </ListItem>
                    )}
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
