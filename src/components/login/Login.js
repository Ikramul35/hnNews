import {
    Button,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    authenticateUser,
    setUserName,
    setUserPassword,
} from '../../actions/posts';
import useStyles from './styles';

const Login = (props) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const { userData, isAuthenticated } = useSelector(
        (state) => state.postReducer
    );
    const { username, password } = userData;

    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();
    const dispatch3 = useDispatch();

    const handleUserNameChange = (e) => {
        dispatch1(setUserName(e.target.value));
    };
    const handlePasswordChange = (e) => {
        dispatch2(setUserPassword(e.target.value));
    };

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
    }, [isAuthenticated, props.history]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = () => {
        dispatch3(authenticateUser());
    };

    return (
        <Container className={classes.root}>
            <Paper>
                <form>
                    <Typography variant="h3">Login</Typography>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formcontrol}
                    >
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Username
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={username}
                            onChange={(e) => handleUserNameChange(e)}
                            labelWidth={60}
                            required
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formcontrol}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={(e) => e.preventDefault()}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                            required
                        />
                    </FormControl>
                    <div className={classes.submit}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
