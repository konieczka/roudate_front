import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const GradientBackground = ({ colors }) => (
  <LinearGradient colors={colors} style={styles.container} />
);

GradientBackground.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GradientBackground;
