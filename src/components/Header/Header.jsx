import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./user.selector";
import { logOutSuccess } from "../../containers/LogIn/action";
import { redirect } from "../CustomRedirect/actions";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(redirect("/login"));
    dispatch(logOutSuccess());
  };
  return (
    <div>
      <h2>Simple Cars</h2>
      <Button onClick={logOut}>LogOut</Button>
      <div>{currentUser && currentUser.data.user.username}</div>
    </div>
  );
};

export default Header;
