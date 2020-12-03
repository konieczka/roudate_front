import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import ForgotPassword from "../../components/ForgotPassword";

const SendMailMutation = gql`
  mutation passwordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;

const ForgotPasswordScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
  });
  const [forgot, { data, error }] = useMutation(SendMailMutation);

  const fields = [
    {
      type: "email",
      placeholder: "email address",
      value: inputValues.email,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          email: value,
        });
      },
    },
  ];

  const onSubmit = () => {
    const forgotData = {
      email: inputValues.email,
    };
    forgot({ variables: forgotData });
    console.log("forgot result:", data, error);
    navigation.navigate("PasswordResetRequestedScreen", {
      email: inputValues.email,
    });
  };

  return (
    <ForgotPassword
      fields={fields}
      onSubmit={onSubmit}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default ForgotPasswordScreen;
