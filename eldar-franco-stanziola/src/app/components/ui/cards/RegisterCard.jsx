import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { Email, Lock, PersonAdd, Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import BackButton from "../buttons/comeBackButton";
import { Audio } from "react-loader-spinner";
import GreenButton from "../buttons/greenButton";
import { countryCodes } from "../../../utils";

const RegisterCard = ({ classes }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+54");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setError("");
  }, [email, password, phone]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      setError("Email no válido");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("La contraseña debe tener al menos 8 caracteres con una letra");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Número de teléfono no válido. Debe tener 10 dígitos");
      return;
    }
    setLoading(true);
    await fetchToRegister();
    setError("");
  };

  const fetchToRegister = async () => {
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phone: countryCode + phone,
        }),
      });

      console.log(response.status);
      if (response.status === 200) {
        router.push("/auth/login");
      } else {
        setError("An error occurred while registering");
      }
    } catch (error) {
      setError("An error occurred while registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={classes.cardContainer}>
      <Card style={classes.card}>
        <BackButton />
        <CardContent>
          <Box style={classes.centerText}>
            <Avatar style={classes.avatar}>
              <Lock />
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Registrarse
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
                style={{ width: "30%" }}
              >
                {countryCodes.map((object, index) => (
                  <MenuItem key={index} value={object.value}>
                    {object.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Número de teléfono"
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setPhone(value);
                }}
                InputProps={{
                  startAdornment: <Phone style={classes.iconMargin} />,
                }}
                style={{ width: "70%" }}
              />
            </Box>
            {error && (
              <Typography style={classes.typographyError} color="error">
                {error}
              </Typography>
            )}
            <Box style={classes.buttonContainer}>
              <GreenButton
                startIcon={<PersonAdd />}
                text="Registrarse"
                type="submit"
              />
            </Box>
            {loading ? (
              <Box style={classes.buttonContainer}>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
              </Box>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegisterCard;
