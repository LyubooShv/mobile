import React, { useState } from "react";
import Form from "../../common/Form";
import { useDispatch } from "react-redux";
import { logInRequest } from "./action";
import { registerRequest } from "../../common/Register/action";

const LogIn = () => {
  const dispatch = useDispatch();
  // const loginRequestHandler = (email, password) => {
  //   dispatch(logInRequest(email, password));
  //   console.log(email, password);
  // };

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleLogIn = async (event) => {
    console.log("login");

    // dispatch(logInRequest(email, password));
    // loginRequestHandler(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div>
      <Form
        submitBtnText="Sign In"
        signInOrUpText="Don't have an account? Sign Up |"
        handleChange={handleChange}
        handleLogIn={handleLogIn}
      />
    </div>
  );
};

export default LogIn;
