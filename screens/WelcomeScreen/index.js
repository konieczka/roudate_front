import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

const WelcomeScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <LinearGradient
      colors={["#BD1589", "#2BB6CF"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
      }}
    />
    <Text style={{ fontSize: 40, color: "white", fontFamily: "Jost" }}>
      Roudate
    </Text>
  </View>
);

export default WelcomeScreen;
