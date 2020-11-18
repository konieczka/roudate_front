import React from "react";
import { View, Image } from "react-native";
import placeholderImage from "assets/upload_photo_placeholder.jpg";
import styles from "./styles";

const ImageUploader = () => (
  <View style={styles.container}>
    <Image style={styles.mainImage} source={placeholderImage} />
    <View>
      <Image style={styles.sideImages} source={placeholderImage} />
      <Image style={styles.sideImages} source={placeholderImage} />
    </View>
  </View>
);

export default ImageUploader;
