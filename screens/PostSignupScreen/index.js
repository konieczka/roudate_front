import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import PostSignup from "../../components/PostSignup";

const AuthenticateMutation = gql`
  mutation resendActivationEmail($email: String!) {
    resendActivationEmail(email: $email) {
      success
      errors
    }
  }
`;

const PostSignupScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [sendAgain, { data, error }] = useMutation(AuthenticateMutation);

  const onResend = () => {
    const sendAgainData = {
      email: email,
    };
    sendAgain({ variables: sendAgainData });
    console.log("sendAgain result:", data, error);
  };

  return (
    <PostSignup
      onResend={onResend}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default PostSignupScreen;
