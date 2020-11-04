import React from "react";
import { View, Text } from "react-native";
import Button from "components/Button";
import Carousel from "components/Carousel";
import GradientBackground from "components/GradientBackground";
import { ROUDATE_CYAN, ROUDATE_VIOLET } from "consts/colors";

const WelcomeScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
    <Text style={{ fontSize: 40, color: "white", fontFamily: "Jost" }}>
      Roudate
    </Text>
    <Carousel />
    <Button
      label="Log in"
      outlined
      onPress={() => {
        console.log("BUTTON CLICKED");
      }}
    />
    <Button label="Sign up" />
  </View>
);

export default WelcomeScreen;
