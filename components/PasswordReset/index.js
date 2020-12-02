import React from "react";
import PropTypes from "prop-types";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import Button from "components/Button";
import Form from "components/Form";
import GradientBackground from "components/GradientBackground";
import useKeyboard from "hooks/useKeyboard";
import {
  ROUDATE_CYAN,
  ROUDATE_VIOLET,
} from "consts/colors";
import styles from "./styles";

const PasswordReset = ({ fields, onSubmit }) => {
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
          <Text style={styles.header}>Enter your{"\n"}new password</Text>
        </View>

        <Form fields={fields} />
        <Button label="Confirm" onPress={onSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
};

PasswordReset.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default PasswordReset;
