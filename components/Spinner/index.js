import React, { useRef, useEffect } from "react";
import { Animated, View, Easing } from "react-native";
import styles from "./styles";

const Spinner = () => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  const startSpin = () => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  const spinAnimOutput = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  useEffect(() => {
    startSpin();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.spinner,
          {
            transform: [
              {
                rotate: spinAnimOutput,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default Spinner;
