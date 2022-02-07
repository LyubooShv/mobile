import React from "react";
import Form from "../../common/Form";

const Register = () => {
  const handleRegister = async (event) => {
    console.log("register");
    // dispatch(registerRequest(email, password));
  };
  return (
    <div>
      <Form
        submitBtnText="Sign Up"
        signInOrUpText="Already have an account? Sign In |"
        handleRegister={handleRegister}
      />
    </div>
  );
};

export default Register;
