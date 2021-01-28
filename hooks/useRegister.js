import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";
import {
  establishCurrentUser,
  establishCurrentUserSuccess,
  establishCurrentUserFailure,
} from "redux_logic/actions/currentUser";
import gql from "graphql-tag";

const registerMutation = gql`
  mutation registerMutation(
    $email: String!
    $password: String!
    $username: String!
    $name: String!
    $birthday: Date!
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

const useRegister = () => {
  const dispatch = useDispatch();
  const [register, { loading, error, data }] = useMutation(registerMutation);
  const [finishedFetching, setFinishedFetching] = useState(false);

  useEffect(() => {
    if (!loading && data) {
      if (error) {
        dispatch(establishCurrentUserFailure(error));
      }

      if (data.register.errors) {
        dispatch(establishCurrentUserFailure(data.register.errors));
      }

      if (data.register.success) {
        dispatch(establishCurrentUserSuccess({ token: data.register.token }));
        AsyncStorage.setItem("@authToken", data.register.token);
      }

      setFinishedFetching(true);
    }
  }, [loading, data, error]);

  const onRegister = (registerData) => {
    dispatch(establishCurrentUser());
    register({ variables: registerData });
  };

  return [onRegister, loading, finishedFetching];
};

export default useRegister;
