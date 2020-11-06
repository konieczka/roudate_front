import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import gql from "graphql-tag";
import Login from "components/Login";

const LoginScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const fields = [
    {
      type: "email",
      placeholder: "email",
      value: inputValues.email,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          email: value,
        });
      },
    },
    {
      type: "password",
      placeholder: "password",
      value: inputValues.password,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          password: value,
        });
      },
    },
  ];

  const onSubmit = () => {
    const loginData = {
      email: inputValues.email,
      password: inputValues.password,
    };
    console.log("login");
  };

  return (
    <Login
      fields={fields}
      onSubmit={onSubmit}
      goToRegister={() => {
        navigation.navigate("RegisterScreen");
      }}
    />
  );
};

export default LoginScreen;
