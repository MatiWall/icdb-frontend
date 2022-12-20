import React from 'react';

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

const Navbar = () => {
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
                                <Tab label="Login" component={Link} to="/login" />
                                <Tab label="Sign Up" component={Link} to="/signup" />
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>
            </ToolBar>
        </AppBar>
        </Box>
    );
};


export default Navbar


