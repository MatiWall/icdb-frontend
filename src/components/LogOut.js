import React from 'react';
import { connect } from 'react-redux';

import {Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

import { logout } from '../actions/auth';

const LogOut= ({logout}) => {
    const navigate = useNavigate()

    const onClick = (e) => {    
        // TODO: Blacklist token server side
        logout()
        navigate('/login');
    };
    return (
        <Button variant="contained" onClick={onClick}>Log Out</Button>
    );
};

export default connect(null, {logout})(LogOut)