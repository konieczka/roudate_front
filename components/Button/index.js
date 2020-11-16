import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Button = ({ outlined, label, onPress, buttonColor, labelColor }) => {
  return (
    <TouchableHighlight
      style={
        outlined
          ? styles.outline
          : {
              ...styles.outline,
              borderColor: buttonColor,
              backgroundColor: buttonColor,
            }
      }
      onPress={onPress}
    >
      <Text
        style={
          outlined
            ? styles.labelText
            : {
                ...styles.labelText,
                color: labelColor,
              }
        }
      >
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
};

Button.defaultProps = {
  outlined: false,
  buttonColor: "white",
  labelColor: "#2BB6CF",
};

export default Button;
