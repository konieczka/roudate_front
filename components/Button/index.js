import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Button = ({ outlined, label, onPress }) => {
  return (
    <TouchableHighlight
      style={
        outlined
          ? styles.outline
          : {
              ...styles.outline,
              backgroundColor: "white",
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
                color: "#2BB6CF",
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
};

Button.defaultProps = {
  outlined: false,
};

export default Button;
