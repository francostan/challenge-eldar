import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Container,
    Box,
    Avatar,
    Button,
} from '@mui/material';
import { Email, Lock, Login } from '@mui/icons-material';
import BlueButton from '../buttons/blueButton';


const LoginCard = ({classes}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(value);
    };

    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailValid(false);
            setError('Email no válido');
            return;
        } else {
            setEmailValid(true);
        }

        if (!validatePassword(password)) {
            setPasswordValid(false);
            setError('La contraseña debe tener al menos 8 caracteres con una letra');
            return;
        } else {
            setPasswordValid(true);
        }

        console.log(email, password);
        setError('');
    };

    return (
        <Container style={classes.cardContainer}>
            <Card style={classes.card}>
                <CardContent>
                    <Box style={classes.centerText}>
                        <Avatar style={classes.avatar}>
                            <Lock />
                        </Avatar>
                        <Typography variant="h5" gutterBottom>
                            Iniciar sesión
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Accede con tu cuenta
                        </Typography>
                    </Box>
                    {!emailValid && <Typography style={classes.typographyError} color="error">Email no válido</Typography>}
                    <form style={classes.form} onSubmit={handleLogin}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailValid(true);
                            }}
                            InputProps={{
                                startAdornment: <Email style={classes.iconMargin} />,
                            }}
                            style={{ ...classes.textField, border: emailValid ? '' : '2px solid #ffcccc' }}
                        />
                        {!passwordValid && <Typography style={classes.typographyError} color="error">Contraseña Incorrecta</Typography>}
                        <TextField
                            fullWidth
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordValid(true);
                            }}
                            InputProps={{
                                startAdornment: <Lock style={classes.iconMargin} />,
                            }}
                            style={{ ...classes.textField, border: passwordValid ? '' : '2px solid #ffcccc' }}
                        />
                        <Box style={classes.buttonContainer}>
                            <BlueButton startIcon={<Login />} text="Iniciar Sesión" type="submit" />
                        </Box>
                    </form>
                    <Box mt={2} display="flex" justifyContent="center">
                        <Button color="primary">¿Olvidaste tu contraseña?</Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default LoginCard;

