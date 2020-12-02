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
import GradientBackground from "components/GradientBackground";
import useKeyboard from "hooks/useKeyboard";
import {
  ROUDATE_CYAN,
  ROUDATE_VIOLET,
  ROUDATE_LIGHT_PINK,
} from "consts/colors";
import styles from "./styles";

const PostSignup = ({ onResend, goToLogin }) => {
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
          <Text style={styles.header}>All done!</Text>
          <Text style={styles.subheader}>
            Your account has been successfully created. Check your inbox for
            account verification email.
          </Text>
        </View>

        <Button label="Log in" onPress={goToLogin} />

        <View>
          <Text style={styles.subheader}>Can’t find verification email?</Text>

          <TouchableOpacity onPress={onResend}>
            <Text
              style={{
                ...styles.subheader,
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

PostSignup.propTypes = {
  onResend: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default PostSignup;
