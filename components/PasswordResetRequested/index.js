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

const PasswordResetRequested = ({ onSubmit, goToLogin }) => {
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
          <Text style={styles.header}>
              Sent!
          </Text>
          <Text style={styles.subheader}>
              Check your email for{"\n"}verification code
          </Text>
        </View>

        <Button label="Log in" onPress={goToLogin} />
        <View>
          <Text style={styles.body}>Can’t find reset email?</Text>
          <TouchableOpacity onPress={onSubmit}>
            <Text
              style={{
                ...styles.body,
                color: ROUDATE_LIGHT_PINK,
                fontWeight: "bold",
              }}
            >
              Tap to send again
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

PasswordResetRequested.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default PasswordResetRequested;
