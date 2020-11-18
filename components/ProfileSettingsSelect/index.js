import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Button from "components/Button";
import styles from "./styles";

const ProfileSettingsSelect = ({ options, selectedOptions }) => (
  <View>
    <Text style={styles.selectLabel}>Gender</Text>
    <View style={styles.container}>
      {options.map((option) => (
        <Button
          label={option}
          outlined={!selectedOptions.includes(option)}
          buttonColor="#3186C4"
          labelColor="white"
          size="compact"
        />
      ))}
    </View>
  </View>
);

ProfileSettingsSelect.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
};

export default ProfileSettingsSelect;
