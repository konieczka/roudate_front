import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import PasswordReset from "../../components/PasswordReset";

const ResetPasswordMutation = gql`
  mutation passwordReset(
    $token: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordReset(
      token: $token
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
    }
  }
`;

const PasswordResetScreen = ({ route, navigation }) => {
  const { token } = route.params;
  const [inputValues, setInputValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [reset, { data, error }] = useMutation(ResetPasswordMutation);

  const fields = [
    {
      type: "newPassword1",
      placeholder: "new password",
      value: inputValues.newPassword1,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          newPassword1: value,
        });
      },
    },
    {
      type: "newPassword2",
      placeholder: "confirm password",
      value: inputValues.newPassword2,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          newPassword2: value,
        });
      },
    },
  ];

  const onSubmit = () => {
    const resetData = {
      token: token,
      newPassword1: inputValues.newPassword1,
      newPassword2: inputValues.newPassword2,
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
