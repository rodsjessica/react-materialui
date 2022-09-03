import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from "@mui/icons-material";
import MicIcon from '@mui/icons-material/Mic';
import MoreVert from '@mui/icons-material/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    icons: {
        padding: theme.spacing(5),
    },
    space: {
        paddingRight: theme.spacing(10),
    }
}))

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <MicIcon />
                    </IconButton>
                    <div className={classes.space} />
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant='outlined' color='secondary' >Iniciar Sessão</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Home;