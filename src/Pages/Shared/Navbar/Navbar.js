import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';
import { useTheme } from '@mui/system';

export default function Navbar() {
    const theme = useTheme()
    const useStyle = makeStyles({
        navIcon:{
            [theme.breakpoints.up('sm')]: {
                display:'none !important'
            }
        },
        navItemContainer:{
            [theme.breakpoints.down('sm')]: {
                display:'none !important'
            },
            display: 'flex'
        },
        mobileNavLink:{
            textDecoration: 'none'

        },
        desktopLink:{
            textDecoration: 'none',
            marginLeft: '20px',
            fontSize: '1.2rem',
            color: 'white',
            fontWeight: 'bold'
        }
    })
    
    const {navIcon, navItemContainer, mobileNavLink, desktopLink} = useStyle()

        const [state, setState] = React.useState(false);

    const list = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
              <ListItem button>
                <ListItemText>
                    <Link className={mobileNavLink} to="/home">Home</Link>
                </ListItemText>
              </ListItem>
              <Divider/>
              <ListItem button>
                <ListItemText>
                    <Link className={mobileNavLink} to="/dashboard">DashBoard</Link>
                </ListItemText>
              </ListItem>
              <Divider/>
              <ListItem button>
                <ListItemText>
                    <Link className={mobileNavLink} to="/exploreCycle">Explore</Link>
                </ListItemText>
              </ListItem>
              <Divider/>
              <ListItem button>
                <ListItemText>
                    <Link className={mobileNavLink} to="/login">Login</Link>
                </ListItemText>
              </ListItem>
              <Divider/>
          </List>
        </Box>
    );

    const {user, logout} = useAuth();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor: '#F59839', pb: 2}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '3rem', textAlign: 'left', color: '#113CFC'}}>
                            Cycle House
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={desktopLink} to="/">Home</Link>
                            <Link className={desktopLink} to="/exploreCycle">Explore</Link>
                            
                            {
                                user?.email?
                                <Box>
                                    <Link className={desktopLink} to="/dashboard">DashBoard</Link>
                                    <Button onClick={logout} className={desktopLink} >LogOut</Button>

                                </Box>
                                :
                                <Link className={desktopLink} to="/login">Login</Link>

                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer
                    open={state}
                    onClose={() => setState(false)}
                    >
                    {list}
                    </Drawer>
                </React.Fragment>
                
            </div>
        </>
    );
}