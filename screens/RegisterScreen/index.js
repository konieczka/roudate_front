import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Register from "components/Register";

const registerMutation = gql`
  mutation registerMutation(
    $email: String!
    $password: String!
    $username: String!
    $birthday: String!
    $name: String!
  ) {
    register(
      email: $email
      password1: $password
      password2: $password
      username: $username
      name: $name
      birthday: $birthday
    ) {
      token
      errors
      success
    }
  }
`;

const RegisterScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [register, { loading, error, data }] = useMutation(registerMutation);

  const fields = [
    {
      type: "name",
      placeholder: "name",
      value: inputValues.name,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          name: value,
        });
      },
    },
    {
      type: "date-of-birth",
      placeholder: "date of birth",
      value: inputValues.dateOfBirth,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          dateOfBirth: value,
        });
      },
    },
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
    const registerData = {
      email: inputValues.email,
      password: inputValues.password,
      username: Math.random().toString(36).substring(7),
      birthday: inputValues.dateOfBirth,
      name: inputValues.name,
    };

    register({ variables: registerData });
    console.log(loading, data, error);
    navigation.navigate("PostSignupScreen", {
      email: inputValues.email,
    });
  };

  return (
    <Register
      fields={fields}
      onSubmit={onSubmit}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default RegisterScreen;
