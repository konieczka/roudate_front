import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  establishCurrentUser,
  establishCurrentUserSuccess,
  establishCurrentUserFailure,
} from "redux_logic/actions/currentUser";
import Register from "components/Register";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

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
  const dispatch = useDispatch();
  const [register, { loading, error, data }] = useMutation(registerMutation);
  const [inputValues, setInputValues] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password1: "",
    password2: "",
  });

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
        navigation.navigate("ProfileSettings");
      }
    }
  }, [loading, data, error]);

  const onSubmit = () => {
    dispatch(establishCurrentUser());
    const registerData = {
      email: inputValues.email,
      password: inputValues.password,
      username: Math.random().toString(36).substring(7),
      birthday: inputValues.dateOfBirth,
      name: inputValues.name,
    };

    register({ variables: registerData });

    if (error) {
      dispatch(establishCurrentUserFailure(error));
    }

    if (data.register.errors) {
      dispatch(establishCurrentUserFailure(data.register.errors));
    }

    if (data.register.success) {
      dispatch(establishCurrentUserSuccess(data));

      navigation.navigate("PostSignupScreen", {
        email: inputValues.email,
      });
    }
  };

  return (
    <Register
      fields={fields}
      onSubmit={onSubmit}
      isLoading={loading}
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default RegisterScreen;
