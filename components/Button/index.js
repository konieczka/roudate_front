import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const getButtonSize = (size) => {
  if (size === "compact") {
    return { width: 180, height: 30 };
  } else if (size === "micro") {
    return { width: 180, height: 30 };
  }

  return {};
};

const getLabelSize = (size) => {
  if (size === "compact") {
    return { fontSize: 14 };
  } else if (size === "micro") {
    return { fontSize: 14 };
  }

  return {};
};

const Button = ({
  outlined,
  label,
  onPress,
  buttonColor,
  labelColor,
  size,
}) => {
  const buttonSize = getButtonSize(size);
  const labelSize = getLabelSize(size);

  const styleOutlinedContainer = {
    ...styles.outline,
    ...buttonSize,
    borderColor: buttonColor,
  };

  const styleFilledContainer = {
    ...styles.outline,
    ...buttonSize,
    borderColor: buttonColor,
    backgroundColor: buttonColor,
  };

  const styleOutlinedLabel = {
    ...styles.labelText,
    ...labelSize,
    color: buttonColor,
  };

  const styleFilledLabel = {
    ...styles.labelText,
    ...labelSize,
    color: labelColor,
  };

  return (
    <TouchableHighlight
      style={outlined ? styleOutlinedContainer : styleFilledContainer}
      onPress={onPress}
    >
      <Text style={outlined ? styleOutlinedLabel : styleFilledLabel}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  outlined: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonColor: PropTypes.string,
  labelColor: PropTypes.string,
  size: PropTypes.oneOf(["default", "compact", "micro"]),
};

Button.defaultProps = {
  outlined: false,
  buttonColor: "white",
  labelColor: "#2BB6CF",
  size: "default",
};

export default Button;
