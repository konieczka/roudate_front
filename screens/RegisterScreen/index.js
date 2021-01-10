import React, { useEffect, useState } from "react";
import useRegister from "hooks/useRegister";
import Register from "components/Register";

const RegisterScreen = ({ navigation }) => {
  const [onRegister, loading, finishedFetching] = useRegister();
  const [inputValues, setInputValues] = useState({
    name: "",
    birthday: "",
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
      value: inputValues.birthday,
      onChangeText: (value) => {
        setInputValues({
          ...inputValues,
          birthday: value,
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
    if (!loading && finishedFetching) {
      navigation.navigate("ProfileSettings");
    }
  }, [loading, finishedFetching]);

  const onSubmit = () => {
    const registerData = {
      ...inputValues,
      username: Math.random().toString(36).substring(7),
      birthday: inputValues.dateOfBirth,
      name: inputValues.name,
    };

    onRegister(registerData);
    navigation.navigate("PostSignupScreen", {
      email: inputValues.email,
    });
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
