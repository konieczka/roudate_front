import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const Input = ({ placeholder, onChangeText, value }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor="white"
    value={value}
    secureTextEntry={placeholder === "password"}
  />
);

export default Input;
