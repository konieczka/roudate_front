import React, { useState, useEffect, useRef } from "react";
import { Image, Text, View, PanResponder } from "react-native";
import carousel1 from "assets/carousel1.jpg";
import carousel2 from "assets/carousel2.jpg";
import carousel3 from "assets/carousel3.jpg";
import styles from "./styles";

const carouselSlides = [
  {
    header: "Online dating redefined",
    description:
      "Roudate's philosophy is simple - it's not about your looks, it's all about your soul!",
    image: carousel1,
    id: 0,
  },
  {
    header: "Speed and blind dating combined",
    description:
      "Rules are simple: you chat with a random person for 5 minutes, the rest is up to you!",
    image: carousel2,
    id: 1,
  },
  {
    header: "Meet inspiring people",
    description:
      "After the time is up, you decide the next step. If the feeling is mutual, you will be able to chat freely.",
    image: carousel3,
    id: 2,
  },
];

const Carousel = () => {
  const [currentSlide, setSlide] = useState(0);
  const index = useRef();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 20) {
          setSlide(index.current + 1 > 2 ? 0 : index.current + 1);
          return;
        }

        if (gestureState.dx < -20) {
          setSlide(index.current - 1 < 0 ? 2 : index.current - 1);

          return;
        }
      },
    })
  ).current;

  useEffect(() => {
    index.current = currentSlide;
  }, [currentSlide]);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={carouselSlides[currentSlide].image}
        />
        <View style={styles.textBox}>
          <Text style={styles.header}>
            {carouselSlides[currentSlide].header}
          </Text>
          <Text style={styles.description}>
            {carouselSlides[currentSlide].description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Carousel;
