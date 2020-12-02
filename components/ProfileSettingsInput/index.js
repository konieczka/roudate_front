import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const ProfileSettingsInput = ({ label, placeholder, onChangeValue, value }) => (
  <View style={styles.container}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeValue}
      value={value}
    />
  </View>
);

ProfileSettingsInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileSettingsInput;
