import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCycle from '../AddCycle/AddCycle';
import MyOrders from '../MyOrders/MyOrders';
import PawNow from '../PayNow/PawNow';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                }}>
                <Link style={{textDecoration: 'none'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/myOrders`}><Button color="inherit">MY Orders</Button></Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/pay`}><Button color="inherit">Pay Now</Button></Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                {admin && <Box>
                    <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link style={{textDecoration: 'none'}} to={`${url}/addCycle`}><Button color="inherit">Add Cycle</Button></Link>
                </Box>}
            </Box>
            
                
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <PawNow></PawNow>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCycle`}>
                        <AddCycle></AddCycle>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;