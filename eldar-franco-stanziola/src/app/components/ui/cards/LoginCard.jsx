import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Container,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import { Email, Lock, Login } from "@mui/icons-material";
import BlueButton from "../buttons/blueButton";
import BackButton from "../buttons/comeBackButton";
import { Audio } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const LoginCard = ({ classes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailValid(false);
      setError("Email no válido");
      return;
    } else {
      setEmailValid(true);
    }
    setError("");

    setLoading(true);
    await fetchToLogin();
  };

  const fetchToLogin = async () => {
    try {
      const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.message === "Invalid credentials") {
        setError("Email o contraseña incorrecta");
      } else if (data.firstName) {
        localStorage.setItem("token", data.id);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
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
              Iniciar sesión
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Accede con tu cuenta
            </Typography>
          </Box>
          {!emailValid && (
            <Typography style={classes.typographyError} color="error">
              Email no válido
            </Typography>
          )}
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
              style={{
                ...classes.textField,
                border: emailValid ? "" : "2px solid #ffcccc",
              }}
            />
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
              style={classes.textField}
            />
            <Box style={classes.buttonContainer}>
              <BlueButton
                startIcon={<Login />}
                text="Iniciar Sesión"
                type="submit"
              />
            </Box>
            <Box style={classes.buttonContainer}>
              {error !== "" && emailValid ? (
                <Typography style={classes.typographyError} color="error">
                  {error}
                </Typography>
              ) : null}
              {loading ? (
                <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="blue"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : null}
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
