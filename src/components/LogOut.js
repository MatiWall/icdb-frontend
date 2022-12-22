import React from 'react';

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link, useNavigate} from 'react-router-dom';
import axiosInstance from '../axios';
import Button from '@mui/material/Button';

const LogOut= (props) => {
    const navigate = useNavigate()

    const onClick = (e) => {    
        // TODO: Blacklist token server side
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/login');
    };
    return (
        <Button variant="contained" onClick={onClick}>Log Out</Button>
    );
};

export default LogOut