import React from 'react';


import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <AppBar>
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
                            <Button sx={{marginLeft: "auto"}} variant="contained"> Login</Button>
                            <Button sx={{marginLeft: 1}} variant="contained"> Sign up </Button>
                        </Box>
                    </Grid>
                </Grid>
            </ToolBar>
        </AppBar>
    );
};


export default Navbar


