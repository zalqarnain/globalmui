import React from 'react'
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {
    return <Grid>

        <Paper elevation={3} >
            <h1 align='center'>React App</h1>
            <Typography variant='h5'>Sign in</Typography>
            <TextField label="Username" placeholder="Enter username" fullWidth required />
            <TextField label="Password" placeholder="Enter password" type='password' fullWidth required />
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Remember me"
            />
            <Button fullWidth>Sign in</Button>
        </Paper>
    </Grid>
}

export default Login;