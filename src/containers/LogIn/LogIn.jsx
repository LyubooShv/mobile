import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

import { logInFail, logInRequest } from "./action";
import { inputValidation } from "./loginValidation/validation";

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

const LogIn = () => {
  const dispatch = useDispatch();
  const requestError = useSelector((state) => state.currentUser.error);

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const { email, password } = userCredentials;

  const handleLogIn = async (e) => {
    e.preventDefault();
    let error = inputValidation(email, password);
    Object.keys(error).length
      ? setErrorMassage(error)
      : // : console.log(email, password);
        dispatch(logInRequest(email, password));
    console.log(requestError);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    dispatch(logInFail(null));
  }, []);

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
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogIn}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography>
              {requestError && "The account does not exist!"}
            </Typography>
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
              Log In
            </Button>

            <Grid container>
              <Grid item>
                <Link className="signInOrUp" to={"/register"}>
                  Don't have an account? Go to Register.
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

export default LogIn;
