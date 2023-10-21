import React, { useState } from 'react'
import { Card, Grid, Paper, TextField, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleSignInClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setDialogOpen(true);

        }, 2000);
    };

    const handleOKClick = () => {
        setDialogOpen(false);
        alert('You clicked OK');
    };
    return <Grid>

        <Card>
            <Paper elevation={3} >
                <h1 align='center'>React App</h1>
                <Typography variant='h5'>Sign in</Typography>
                {/* <Typography variant='h4'>Sign in</Typography> */}
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

                {/* Contained button */}
                <Button variant="contained" onClick={handleSignInClick} disabled={loading} fullWidth>
                    {loading ? <CircularProgress style={{color: 'red'}} /> : 'Sign in'}
                </Button>

                {/* Outlined button */}
                {/* <Button variant="outlined" fullWidth>Sign in</Button> */}


                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                    <DialogTitle>Sign In Successful</DialogTitle>
                    <DialogContent>
                        Welcome! You are now signed in.
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleOKClick} variant="outlined" style={{color: 'red'}}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Card>
    </Grid>
}

export default Login;