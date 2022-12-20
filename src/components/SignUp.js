import React from 'react';

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
import {Link} from 'react-router-dom';


const paperStyle= {
    "padding": "20px",
    "margin": "50px auto",
    "width": "30rem"
}

const avatarStyle = {
    backgroundColor: "#1bbd7e"
}

const SignUpPage = (props) => {
    return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    
                    <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign up</h2>
                    
                    <FormControl
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required/>
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    />
                    <br/>
                    <TextField
                    id="outlined-password-input"
                    label="Verify Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth required
                    />
                    
                    <br/>
                    <Button type="submit" variant="contained" fullwidth>Sign up</Button>
                    </FormControl>
                    <Typography>
                        Have an account? <Link to="/login">Login</Link>
                    </Typography>
                    </Grid>
                </Paper>
        </Grid>
    );
};


export default SignUpPage