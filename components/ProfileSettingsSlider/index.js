import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { ROUDATE_CYAN, ROUDATE_VIOLET, BACKGROUND_GRAY } from "consts/colors";
import styles from "./styles";

const ProfileSettingsSlider = ({
  inputValue,
  onValueChange,
  defaultValue,
  label,
}) => (
  <View>
    <Text style={styles.selectLabel}>{label}</Text>
    <View style={styles.container}>
      <Text style={styles.valueLabel}>{`${inputValue} km`}</Text>
      <Slider
        style={{ width: 290, height: 50 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={defaultValue}
        thumbTintColor={ROUDATE_CYAN}
        minimumTrackTintColor={ROUDATE_VIOLET}
        maximumTrackTintColor={BACKGROUND_GRAY}
        onValueChange={(v) => onValueChange(v)}
      />
    </View>
  </View>
);
export default ProfileSettingsSlider;
