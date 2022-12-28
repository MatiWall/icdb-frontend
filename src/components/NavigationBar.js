import React from 'react';
import { connect, useStore} from 'react-redux';
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';

import LogOut from './LogOut';
import { ContentCutOutlined } from '@mui/icons-material';

const Navbar = (props) => {
    console.log('Checking authenticated');
    console.log(props);
    return (
        <Box   sx={{ display: 'flex' }}>
        <AppBar position="static">
            <ToolBar>
                <Grid container>
                    <Grid item xs={2}> Put Logo Here </Grid>
                    <Grid item xs={6}>
                        <Tabs>
                            <Tab label="Profile"/>
                            <Tab label="Other Page"/>
                        </Tabs>
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={3}>
                        <Box display="flex">
                            
        
                            <Tabs>
                                {props.isAuthenticated ? <LogOut></LogOut> : <div><Tab label="Login" component={Link} to="/login" />
                                <Tab label="Sign Up" component={Link} to="/signup" /></div> }
                                
                                <Tab icon={<SettingsIcon />} component={Link} to="/settings"></Tab>
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>
            </ToolBar>
        </AppBar>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};


export default connect(mapStateToProps)(Navbar)


