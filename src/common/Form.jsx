import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Form({
  submitBtnText,
  signInOrUpText,
  handleLogIn,
  handleChange,
  handleRegister,
}) {
  // const { handleChange, handleSubmit, SignUp } = useContext(CurrentUserContext);
  function onFormSelect(e) {
    e.preventDefault();
    if (window.location.pathname === "/login") {
      handleLogIn();
    } else {
      handleRegister();
    }
  }
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
            {/* {submitBtnText} */}
          </Typography>
          <Box
            component="form"
            // onSubmit={submitBtnText === "Sign In" ? handleSubmit : SignUp}
            onSubmit={onFormSelect}
            noValidate
            sx={{ mt: 1 }}
          >
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
              {submitBtnText}
            </Button>

            <Grid container>
              <Grid item>
                <Link
                  className="signInOrUp"
                  to={
                    window.location.pathname === "/login"
                      ? "/register"
                      : window.location.pathname === "/register"
                      ? "/login"
                      : "/login"
                  }
                >
                  {signInOrUpText}
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
}
