import React, {useState} from 'react';

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

const paperStyle= {
    "padding": "20px",
    "margin": "50px auto",
    "width": "30rem"
}

const avatarStyle = {
    backgroundColor: "#1bbd7e"
}

const LoginPage = (props) => {
const [formData, setFormData] = useState({
    email: '',
    password: ''
});

    const {email, password} = formData;
    const onChange = (e) =>setFormData({...formData, [e.target.label]: e.target.value});
    const onSubmit = (e) =>{
        e.preventDefault;
        console.log('Submitted');
    };



    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <form onSubmit={onSubmit}>
                    <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    
                    <FormControl
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required onChange={onChange}/>
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    />
                    <FormControlLabel control={<Checkbox/>} label="Remember Me"/>
                    
                    <br/>
                    <Button type="submit" variant="contained" fullwidth>Login</Button>
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


export default LoginPage