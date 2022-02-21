import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from "../../containers/LogIn/action";
import { redirect } from "../CustomRedirect/actions";
import logo from "./logo.png";
import "./header.scss";

const Header = () => {
  const user = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(redirect("/login"));
    dispatch(logOutSuccess());
  };
  return (
    <div className="headerData">
      <div className="title">
        <div className="appTitle">
          <h2>Lyuboo's Cars</h2>
        </div>
        <div className="logo">
          <img className="img" src={logo} alt="Logo" />
        </div>
      </div>
      {user ? (
        <div className="user">
          <div className="logout">
            <Button onClick={logOut}>LogOut</Button>
          </div>
          <div className="username">{user.data.user.username}</div>
        </div>
      ) : (
        <a
          href="#"
          className="login"
          onClick={() => dispatch(redirect("/login"))}
        >
          Log In
        </a>
      )}
    </div>
  );
};

export default Header;
