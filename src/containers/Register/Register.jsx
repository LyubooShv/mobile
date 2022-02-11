import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  createTheme,
  ThemeProvider,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { registerRequest } from "./action";
import { inputValidation } from "./registerValidation/validation";
import "./register.scss";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const { email, password, firstName, lastName } = userCredentials;

  const handleRegister = async (e) => {
    e.preventDefault();
    let error = inputValidation(userCredentials);
    Object.keys(error).length
      ? setErrorMassage(error)
      : dispatch(registerRequest(email, password, firstName, lastName));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleRegister}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid className="namesContainer">
              <Typography>{errorMassage.firstNameError}</Typography>
              <TextField
                margin="normal"
                required
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
                onChange={handleChange}
                sx={{ mr: 2 }}
              />
              <Typography>{errorMassage.lastNameError}</Typography>
              <TextField
                margin="normal"
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoFocus
                onChange={handleChange}
                sx={{ ml: 2 }}
              />
            </Grid>
            <Typography>{errorMassage.emailError}</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <Typography>{errorMassage.passwordError}</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <Link className="signInOrUp" to={"/login"}>
                  Already have an account? Go to Log In.
                </Link>
              </Grid>

              <Grid item>
                <Link className="home" to="/home">
                  Continue to catalog
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
