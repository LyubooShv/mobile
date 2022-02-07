import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./user.selector";
import { logOutSuccess } from "../../containers/LogIn/action";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Simple Cars</h2>
      <Link to="/login">LogIn</Link>
      <Button onClick={() => dispatch(logOutSuccess())}>LogOut</Button>
      <div>{currentUser && currentUser.data.user.username}</div>
    </div>
  );
};

export default Header;
