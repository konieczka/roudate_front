import React from "react";
import { View } from "react-native";
import Input from "./Input";
import styles from "./styles";

const Form = ({ fields }) => (
  <View style={styles.container}>
    {fields.map((field) => (
      <Input
        placeholder={field.placeholder}
        onChangeText={field.onChangeText}
        value={field.value}
      />
    ))}
  </View>
);

export default Form;
