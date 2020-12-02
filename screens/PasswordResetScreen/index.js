import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import PasswordReset from "../../components/PasswordReset";

const SendMailMutation = gql`
  mutation passwordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;

const PasswordResetScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [reset, { data, error }] = useMutation(SendMailMutation);

  const fields = [
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
    {
      type: "confirmPassword",
      placeholder: "confirm password",
      value: inputValues.confirmPassword,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          confirmPassword: value,
        });
      },
    },
  ];

  const onSubmit = () => {
    const resetData = {
      password: inputValues.password,
      confirmPassword: inputValues.confirmPassword,
    };
    reset({ variables: resetData });
    console.log("reset result:", data, error);
    navigation.navigate("LoginScreen");
  };

  return (
    <PasswordReset
      fields={fields}
      onSubmit={onSubmit}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default PasswordResetScreen;
