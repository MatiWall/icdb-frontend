import React from 'react';

import Button from '@mui/material/Button';

import { delete_user } from '../actions/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Settings = ({delete_user}) => {
    const navigate = useNavigate();
    
    const onClick = (e) => {    
    // TODO: Blacklist token server side
    delete_user();
    navigate('/signup');
    };

    return (
            <Button variant="contained" onClick={onClick}>Delete Profile</Button>
    );
};

export default connect(null, {delete_user})(Settings)