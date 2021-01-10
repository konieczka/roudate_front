import React from "react";
import { View, Text } from "react-native";
import RangeSlider from "react-native-range-slider-expo";
import { ROUDATE_CYAN, ROUDATE_VIOLET, BACKGROUND_GRAY } from "consts/colors";
import styles from "./styles";

const ProfileSettingsSlider = ({
  inputValue,
  onValueChange,
  label,
}) => (
  <View>
    <Text style={styles.selectLabel}>{label}</Text>
    <View style={styles.container}>
      <RangeSlider
        styleSize={15}
        min={18}
        max={75}
        step={1}
        initialFromValue={18}
        initialToValue={25}
        fromValueOnChange={(v) => {
          onValueChange({ ...inputValue, min: v });
        }}
        toValueOnChange={(v) => {
          onValueChange({ ...inputValue, max: v });
        }}
        inRangeBarColor={ROUDATE_VIOLET}
        outOfRangeBarColor={BACKGROUND_GRAY}
      />
    </View>
  </View>
);
export default ProfileSettingsSlider;
