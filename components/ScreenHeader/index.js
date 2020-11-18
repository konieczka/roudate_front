import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

const ScreenHeader = ({ label }) => (
  <View style={styles.container}>
    <Text style={styles.screenName}>{label}</Text>
  </View>
);

ScreenHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ScreenHeader;
