import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  establishCurrentUser,
  establishCurrentUserSuccess,
  establishCurrentUserFailure,
} from "redux_logic/actions/currentUser";
import gql from "graphql-tag";

const LoginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      errors
      success
    }
  }
`;

const useLogin = () => {
  const dispatch = useDispatch();
  const [login, { loading, data, error }] = useMutation(LoginMutation);
  const [finishedFetching, setFinishedFetching] = useState(false);

  useEffect(() => {
    // TODO: Handle non-request related errors (here and elsewhere)
    if (!loading && data) {
      if (error) {
        dispatch(establishCurrentUserFailure(error));
      }

      if (data.tokenAuth.success) {
        dispatch(establishCurrentUserSuccess({ token: data.tokenAuth.token }));
        AsyncStorage.setItem("@authToken", data.tokenAuth.token);
      }

      setFinishedFetching(true);
    }
  }, [loading, data, error]);

  const onLogin = (loginData) => {
    dispatch(establishCurrentUser());
    login({ variables: loginData });
  };

  return [onLogin, loading, finishedFetching];
};

export default useLogin;
