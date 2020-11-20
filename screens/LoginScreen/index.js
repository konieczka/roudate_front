import React, { useState, useEffect } from "react";
import useLogin from "hooks/useLogin";
import Login from "components/Login";

const LoginScreen = ({ navigation }) => {
  const [onLogin, loading, finishedFetching] = useLogin();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const fields = [
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
    const loginData = {
      email: inputValues.email,
      password: inputValues.password,
    };
    onLogin(loginData);
  };

  useEffect(() => {
    if (!loading && finishedFetching) {
      navigation.navigate("ProfileSettings");
    }
  }, [loading, finishedFetching]);

  return (
    <Login
      fields={fields}
      onSubmit={onSubmit}
      goToRegister={() => {
        navigation.navigate("RegisterScreen");
      }}
      goToRecovery={() => {
        navigation.navigate("ForgotPasswordScreen");
      }}
    />
  );
};

export default LoginScreen;
