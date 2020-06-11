import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Arial, Helvetica, sans- serif',
        fontSize: '15px',
        marginLeft: '80px'
    },
    footer: {
        backgroundColor: "#2E1D1E"
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.footer}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                         Developed By BridgeLabz Bangalore, karnataka
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
