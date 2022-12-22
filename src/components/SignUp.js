import React, {useState} from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';


import axiosInstance from '../axios';


const paperStyle= {
    "padding": "20px",
    "margin": "50px auto",
    "width": "30rem"
}

const avatarStyle = {
    backgroundColor: "#1bbd7e"
}

const SignUpPage = (props) => {
    const initialFormData = Object.freeze({
        email: '',
        password: '',
        re_password: ''
    });

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        axiosInstance.post('auth/users/', {
            email: formData.email,
            password: formData.password,
            re_password: formData.re_password,
            first_name: "test",
            last_name: "test",
        }).then((res) => {
            navigate('/login');
        })
    };

    return (
            <Grid>
                <form>
                <Paper elevation={10} style={paperStyle}>
                    
                    <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign up</h2>
                    
                    <FormControl
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Email" name="email" variant="outlined" fullWidth required onChange={handleChange}/>
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    onChange={handleChange}
                    name="password"
                    />
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Verify Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    onChange={handleChange}
                    name="re_password"
                    />
                    
                    <br/>
                    <Button type="submit" variant="contained" onClick={handleSubmit} fullwidth>Sign up</Button>
                    </FormControl>
                    <Typography>
                        Have an account? <Link to="/login">Login</Link>
                    </Typography>
                    </Grid>
                </Paper>
                </form>
        </Grid>
    );
};


export default SignUpPage