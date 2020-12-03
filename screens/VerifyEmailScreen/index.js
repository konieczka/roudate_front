import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import VerifyEmail from "../../components/VerifyEmail";

const VerifyEmailMutation = gql`
  mutation verifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

const VerifyEmailScreen = ({ route, navigation }) => {
  const { token } = route.params;
  const [verify, { data, error }] = useMutation(VerifyEmailMutation);

  const onSubmit = () => {
    const verifyData = {
      token: token,
    };
    verify({ variables: verifyData });
    console.log("verify result:", data, error);
    navigation.navigate("SuccessfullyVerifiedScreen");
  };

  return (
    <VerifyEmail
      onSubmit={onSubmit}
    />
  );
};

export default VerifyEmailScreen;
