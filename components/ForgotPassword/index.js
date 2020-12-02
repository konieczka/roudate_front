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

const ForgotPassword = ({ fields, onSubmit, goToLogin }) => {
  const isKeyboardVisible = useKeyboard();

  return (
    <View style={styles.container}>
      <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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
          <Text style={styles.header}>Reset your{"\n"}password</Text>
          <Text style={styles.subheader}>
            Enter your user account's{"\n"}verified email address and{"\n"}we
            will send you a password{"\n"}reset link.
          </Text>
        </View>

        <Form fields={fields} />
        <Button label="Send" onPress={onSubmit} />

        <Text style={styles.subheader}>Got here on accident?</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text
            style={{
              ...styles.subheader,
              color: ROUDATE_LIGHT_PINK,
              fontWeight: "bold",
            }}
          >
            Go back to login
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

ForgotPassword.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default ForgotPassword;
