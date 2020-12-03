import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import PasswordResetRequested from "../../components/PasswordResetRequested";

const SendMailMutation = gql`
  mutation passwordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;

const PasswordResetRequestedScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [inputValues, setInputValues] = useState({
    email: "",
  });
  const [forgot, { data, error }] = useMutation(SendMailMutation);

  const onSubmit = () => {
    const forgotData = {
      email: email,
    };
    forgot({ variables: forgotData });
    console.log("forgot result:", data, error);
  };

  return (
    <PasswordResetRequested
      onSubmit={onSubmit}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default PasswordResetRequestedScreen;
