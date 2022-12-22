import React, {useState} from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {Link, Redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { login } from '../actions/auth';

const paperStyle= {
    "padding": "20px",
    "margin": "50px auto",
    "width": "30rem"
}

const avatarStyle = {
    backgroundColor: "#1bbd7e"
}

const LoginPage = ({login}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const history = useNavigate();

    const {email, password} = formData;
    const onChange = (e) =>setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = (e) =>{
        e.preventDefault();
        login(formData.email, formData.password);
        history('/');
    };



    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <form>
                    <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    
                    <FormControl
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Email" name="email" variant="outlined" fullWidth required onChange={onChange}/>
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    onChange={onChange}
                    />
                    <FormControlLabel control={<Checkbox/>} label="Remember Me"/>
                    
                    <br/>
                    <Button type="submit" variant="contained" onClick={onSubmit}>Login</Button>
                    </FormControl>
                    <Typography>
                        <Link to="/password-reset">Forgot password?</Link>
                    </Typography>
                    <Typography>
                        Have an account? <Link to="/signup">Signup</Link>
                    </Typography>
                    </Grid>
                    </form>
                </Paper>
        </Grid>
    );
};


export default connect(null, {login})(LoginPage);