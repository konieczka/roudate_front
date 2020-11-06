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

const Register = ({ fields, onSubmit }) => {
  const isKeyboardVisible = useKeyboard();

  return (
    <View style={styles.container}>
      <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          ...styles.content,
          paddingBottom: isKeyboardVisible ? 10 : 75,
        }}
      >
        <Text style={styles.header}>Sign up</Text>
        <View style={styles.fbButton}>
          <Button
            label="Sign up with Facebook"
            buttonColor="#3186C4"
            labelColor="white"
          />
        </View>
        <Text
          style={{
            ...styles.subheader,
            display: isKeyboardVisible ? "none" : "flex",
          }}
        >
          or
        </Text>

        <Form fields={fields} />
        <Button label="Sign up" onPress={onSubmit} />

        <Text style={styles.subheader}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("dupa");
          }}
        >
          <Text
            style={{
              ...styles.subheader,
              color: ROUDATE_LIGHT_PINK,
              fontWeight: "bold",
            }}
          >
            Tap to log in
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

Register.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
