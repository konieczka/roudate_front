import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Login from "components/Login";

const LoginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      errors
    }
  }
`;

const LoginScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [login, { data, error }] = useMutation(LoginMutation);

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
    login({ variables: loginData });
    console.log("login result:", data, error);
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
