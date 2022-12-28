import React from 'react';

import Button from '@mui/material/Button';
import { activate_user } from '../actions/auth';
import { connect } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';

const ActivatePasswordPage = ({activate_user}) => {
    const navigate = useNavigate();

    const params = useParams()
    
    const onClick = (e) => {  
        const uid = params.uid;
        const token = params.token;
        activate_user(uid, token);
        navigate('/login');
    };

    return (
            <Button variant="contained" onClick={onClick}>Activate Account</Button>
    );
};

export default connect(null, {activate_user})(ActivatePasswordPage);