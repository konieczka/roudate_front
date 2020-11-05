import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Button from "components/Button";
import Form from "components/Form";
import GradientBackground from "components/GradientBackground";
import {
  ROUDATE_CYAN,
  ROUDATE_VIOLET,
  ROUDATE_LIGHT_PINK,
} from "consts/colors";
import styles from "./styles";

const Register = ({ fields, onSubmit }) => (
  <View style={styles.container}>
    <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
    <View style={styles.content}>
      <Text style={styles.header}>Sign up</Text>
      <Button
        label="Sign up with Facebook"
        buttonColor="#3186C4"
        labelColor="white"
      />
      <Text style={styles.subheader}>or</Text>
      <Form fields={fields} />
      <Button label="Sign up" onPress={onSubmit} />
      <Text style={styles.subheader}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("dupa");
        }}
      >
        <Text style={{ ...styles.subheader, color: ROUDATE_LIGHT_PINK }}>
          Tap to log in
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

Register.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
