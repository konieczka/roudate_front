import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Button from "components/Button";
import styles from "./styles";

const ProfileSettingsSelect = ({ options, selectedOptions, onSelect }) => (
  <View>
    <Text style={styles.selectLabel}>Gender</Text>
    <View style={styles.container}>
      {options.map((option) => (
        <Button
          label={option.label}
          outlined={
            !(JSON.stringify(selectedOptions) === JSON.stringify(option))
          }
          buttonColor="#3186C4"
          labelColor="white"
          size={options.length > 2 ? "micro" : "compact"}
          onPress={() => {
            onSelect(option);
          }}
        />
      ))}
    </View>
  </View>
);

ProfileSettingsSelect.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  onSelect: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default ProfileSettingsSelect;
