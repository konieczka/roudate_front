import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const ProfileSettingsInput = ({ label, placeholder }) => (
  <View style={styles.container}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput placeholder={placeholder} />
  </View>
);

ProfileSettingsInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ProfileSettingsInput;
