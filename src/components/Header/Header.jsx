import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from "../../containers/LogIn/action";
import { redirect } from "../CustomRedirect/actions";

const Header = () => {
  const user = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(redirect("/login"));
    dispatch(logOutSuccess());
  };
  return (
    <div>
      <h2>Simple Cars</h2>
      {user ? (
        <div>
          <Button onClick={logOut}>LogOut</Button>
          <div>{user.data.user.username}</div>
        </div>
      ) : (
        <a href="#" onClick={() => dispatch(redirect("/login"))}>
          Log In
        </a>
      )}
    </div>
  );
};

export default Header;
