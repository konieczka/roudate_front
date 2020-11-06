import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Button from "components/Button";
import Form from "components/Form";
import GradientBackground from "components/GradientBackground";
import useKeyboard from "hooks/useKeyboard";
import {
  ROUDATE_CYAN,
  ROUDATE_VIOLET,
  ROUDATE_LIGHT_PINK,
} from "consts/colors";
import styles from "./styles";

const Login = ({ fields, onSubmit, goToRegister }) => {
  const isKeyboardVisible = useKeyboard();

  return (
    <View style={styles.container}>
      <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          ...styles.content,
          paddingBottom: isKeyboardVisible ? 10 : 100,
        }}
      >
        <View
          style={{
            ...styles.subsection,
            display: !isKeyboardVisible ? "flex" : "none",
          }}
        >
          <Text style={styles.header}>Log in</Text>
          <View style={styles.fbButton}>
            <Button
              label="Log in with Facebook"
              buttonColor="#3186C4"
              labelColor="white"
            />
          </View>
          <Text style={styles.subheader}>or</Text>
        </View>

        <Form fields={fields} />
        <Button label="Log in" onPress={onSubmit} />
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.passwordCta}>Forgot password?</Text>
        </TouchableOpacity>

        <Text style={styles.subheader}>Don't have an account?</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text
            style={{
              ...styles.subheader,
              color: ROUDATE_LIGHT_PINK,
              fontWeight: "bold",
            }}
          >
            Tap to sign up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

Login.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToRegister: PropTypes.func.isRequired,
};

export default Login;
