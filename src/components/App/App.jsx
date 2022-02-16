import React from "react";
import { useSelector } from "react-redux";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Style
import "./App.scss";
// Components
import Home from "../../containers/Home/Home";
import CustomRedirect from "../CustomRedirect/CustomRedirect";
// TODO: IMPORT PAGES TO WHICH USER WILL BE REDIRECT
import LogIn from "../../containers/LogIn/LogIn";
import Register from "../../containers/Register/Register";

function App() {
  const user = useSelector((state) => state.currentUser.currentUser);

  let windowLocation = window.location;
  let windowURL = windowLocation.pathname;

  return (
    <div className="App">
      <CustomRedirect />
      {user && (windowURL === "/login" || windowURL === "/register") ? (
        <Redirect to="/home" />
      ) : null}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect push exact from="/" to="/login" />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
