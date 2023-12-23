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
    MenuItem,
} from '@mui/material';
import { Email, Lock, PersonAdd, Phone } from '@mui/icons-material';
import GreenButton from '../buttons/greenButton';


const RegisterCard = ({ classes }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+1'); // Ejemplo inicial para el código de área
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const phoneRegex = /^\d{10}$/;

        if (!emailRegex.test(email)) {
            setError('Email no válido');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('La contraseña debe tener al menos 8 caracteres con una letra');
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError('Número de teléfono no válido. Debe tener 10 dígitos');
            return;
        }

        console.log(firstName, lastName, email, password, countryCode + phone);
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
                            Registrarse
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Ingresa tus datos
                        </Typography>
                    </Box>
                    <form style={classes.form} onSubmit={handleRegister}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            variant="outlined"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            style={classes.textField}
                        />
                        <TextField
                            fullWidth
                            label="Apellido"
                            variant="outlined"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            style={classes.textField}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: <Email style={classes.iconMargin} />,
                            }}
                            style={classes.textField}
                        />
                        <TextField
                            fullWidth
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: <Lock style={classes.iconMargin} />,
                            }}
                            style={classes.textField}
                        />
                        <Box display="flex" alignItems="center" style={classes.textField}>
                            <TextField
                                select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                variant="outlined"
                                style={{ width: '30%' }}
                            >
                                <MenuItem value="+1">+1</MenuItem>
                                <MenuItem value="+52">+52</MenuItem>
                                {/* Añade más códigos de área según necesites */}
                            </TextField>
                            <TextField
                                fullWidth
                                label="Número de teléfono"
                                variant="outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                InputProps={{
                                    startAdornment: <Phone style={classes.iconMargin} />,
                                }}
                                style={{ width: '70%' }}
                            />
                        </Box>
                        {/* ... (Resto del formulario) */}
                        {error && <Typography style={classes.typographyError} color="error">{error}</Typography>}
                        <Box style={classes.buttonContainer}>
                            <GreenButton startIcon={<PersonAdd />} text="Registrarse" type="submit" />
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default RegisterCard;
